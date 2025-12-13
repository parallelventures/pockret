import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../../fonts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { helpArticles, HelpCategory } from "../../articles";
import { articleContent } from "../../content";

export function generateStaticParams() {
    const params: { category: string; article: string }[] = [];

    Object.entries(helpArticles).forEach(([category, data]) => {
        data.articles.forEach((article) => {
            params.push({
                category,
                article: article.slug,
            });
        });
    });

    return params;
}

export default async function HelpArticlePage({
    params
}: {
    params: Promise<{ category: string; article: string }>
}) {
    const { category, article } = await params;
    const categoryData = helpArticles[category as HelpCategory];
    const content = articleContent[category]?.[article];

    if (!categoryData || !content) {
        notFound();
    }

    const articleMeta = categoryData.articles.find(a => a.slug === article);

    // Get related articles
    const relatedArticles = content.relatedArticles?.map(slug => {
        const relatedMeta = categoryData.articles.find(a => a.slug === slug);
        return relatedMeta ? { ...relatedMeta, category } : null;
    }).filter(Boolean) || [];

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Breadcrumb */}
                <section className="pt-24 pb-4 px-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-black/50 flex-wrap">
                        <Link href="/help" className="hover:text-black transition-colors">
                            Help Center
                        </Link>
                        <span>›</span>
                        <Link href={`/help/${category}`} className="hover:text-black transition-colors">
                            {categoryData.title}
                        </Link>
                        <span>›</span>
                        <span className="text-black">{articleMeta?.title}</span>
                    </div>
                </section>

                {/* Article */}
                <section className="pb-12 px-6 max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <article className="flex-1 min-w-0">
                            <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-extrabold text-black mb-6`}>
                                {content.title}
                            </h1>

                            <div
                                className="prose prose-lg max-w-none
                                    prose-headings:font-bold prose-headings:text-black
                                    prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
                                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                                    prose-p:text-black/70 prose-p:leading-relaxed
                                    prose-li:text-black/70
                                    prose-strong:text-black
                                    prose-a:text-black prose-a:underline
                                    prose-table:text-sm
                                    prose-th:bg-black/5 prose-th:p-3 prose-th:text-left
                                    prose-td:p-3 prose-td:border-t prose-td:border-black/10
                                "
                                dangerouslySetInnerHTML={{
                                    __html: parseMarkdown(content.content)
                                }}
                            />
                        </article>

                        {/* Sidebar */}
                        {relatedArticles.length > 0 && (
                            <aside className="lg:w-64 flex-shrink-0">
                                <div className="sticky top-24">
                                    <h3 className={`${ppAgrandirHeading.className} text-sm font-bold text-black/50 mb-4`}>
                                        Related Articles
                                    </h3>
                                    <div className="space-y-3">
                                        {relatedArticles.map((related: any) => (
                                            <Link
                                                key={related.slug}
                                                href={`/help/${related.category}/${related.slug}`}
                                                className="block text-sm text-black/60 hover:text-black transition-colors"
                                            >
                                                {related.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        )}
                    </div>
                </section>

                {/* Back Link */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <Link href={`/help/${category}`} className="text-black/50 hover:text-black transition-colors text-sm">
                        ← Back to {categoryData.title}
                    </Link>
                </section>

                {/* Help CTA */}
                <section className="py-12 px-6 border-t border-black/10">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-black/60 mb-4">
                            Didn't find what you were looking for?
                        </p>
                        <a href="mailto:help@pockret.com" className="text-black font-medium hover:underline">
                            Contact Support →
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Improved markdown parser
function parseMarkdown(text: string): string {
    const lines = text.trim().split('\n');
    const result: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            result.push(`<ul class="my-4 space-y-2">${listItems.map(item => `<li class="flex gap-2"><span class="text-black/40">•</span><span>${item}</span></li>`).join('')}</ul>`);
            listItems = [];
        }
        inList = false;
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Skip empty lines
        if (!line) {
            flushList();
            continue;
        }

        // H2 headers
        if (line.startsWith('## ')) {
            flushList();
            result.push(`<h2 class="text-xl font-bold text-black mt-10 mb-4">${line.slice(3)}</h2>`);
            continue;
        }

        // H3 headers
        if (line.startsWith('### ')) {
            flushList();
            result.push(`<h3 class="text-lg font-semibold text-black mt-8 mb-3">${line.slice(4)}</h3>`);
            continue;
        }

        // List items
        if (line.startsWith('- ')) {
            inList = true;
            listItems.push(parseInline(line.slice(2)));
            continue;
        }

        // Table row
        if (line.includes('|') && !line.startsWith('|--')) {
            flushList();
            const isHeaderSeparator = line.match(/^\|[\s-|]+\|$/);
            if (isHeaderSeparator) continue;

            const cells = line.split('|').filter(Boolean).map(c => c.trim());
            const isHeader = i === 0 || (i > 0 && lines[i + 1]?.includes('---'));

            if (isHeader && !result.some(r => r.includes('<table'))) {
                result.push('<table class="w-full my-6 text-sm"><thead><tr class="bg-black/5">');
                result.push(cells.map(c => `<th class="px-4 py-3 text-left font-semibold">${c}</th>`).join(''));
                result.push('</tr></thead><tbody>');
            } else if (result.some(r => r.includes('<table'))) {
                result.push(`<tr class="border-t border-black/10">${cells.map(c => `<td class="px-4 py-3">${c}</td>`).join('')}</tr>`);
            }
            continue;
        }

        // Close table
        if (!line.includes('|') && result.some(r => r.includes('<tbody>')) && !result.some(r => r.includes('</table>'))) {
            result.push('</tbody></table>');
        }

        // Regular paragraph
        flushList();
        result.push(`<p class="text-black/70 leading-relaxed my-4">${parseInline(line)}</p>`);
    }

    flushList();

    // Close any open table
    if (result.some(r => r.includes('<tbody>')) && !result.some(r => r.includes('</table>'))) {
        result.push('</tbody></table>');
    }

    return result.join('\n');
}

function parseInline(text: string): string {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-black">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-black/5 px-1.5 py-0.5 rounded text-sm">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-black underline hover:no-underline">$1</a>')
        .replace(/✅/g, '<span class="text-green-600">✓</span>')
        .replace(/❌/g, '<span class="text-red-500">✗</span>')
        .replace(/⚠️/g, '<span class="text-yellow-600">⚠</span>');
}


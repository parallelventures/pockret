import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ppAgrandirHeading, sfProDisplay } from "../../fonts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { helpArticles, HelpCategory } from "../articles";

export function generateStaticParams() {
    return Object.keys(helpArticles).map((category) => ({
        category,
    }));
}

export default async function HelpCategoryPage({
    params
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = await params;
    const categoryData = helpArticles[category as HelpCategory];

    if (!categoryData) {
        notFound();
    }

    return (
        <div className={`${sfProDisplay.className} min-h-screen flex flex-col bg-[#F9FAFB]`}>
            <Navbar />

            <main className="flex-1 w-full">
                {/* Breadcrumb */}
                <section className="pt-24 pb-4 px-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-black/50">
                        <Link href="/help" className="hover:text-black transition-colors">
                            Help Center
                        </Link>
                        <span>›</span>
                        <span className="text-black">{categoryData.title}</span>
                    </div>
                </section>

                {/* Header */}
                <section className="pb-12 px-6 max-w-4xl mx-auto">
                    <h1 className={`${ppAgrandirHeading.className} text-3xl md:text-4xl font-extrabold text-black mb-3`}>
                        {categoryData.title}
                    </h1>
                    <p className="text-lg text-black/60">
                        {categoryData.description}
                    </p>
                </section>

                {/* Articles List */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                        {categoryData.articles.map((article, index) => (
                            <Link
                                key={article.slug}
                                href={`/help/${category}/${article.slug}`}
                                className={`flex items-center justify-between p-5 hover:bg-black/[0.02] transition-colors ${index !== categoryData.articles.length - 1 ? 'border-b border-black/5' : ''
                                    }`}
                            >
                                <div className="flex-1 pr-4">
                                    <h2 className="text-black font-medium mb-1">
                                        {article.title}
                                    </h2>
                                    <p className="text-black/50 text-sm">
                                        {article.summary}
                                    </p>
                                </div>
                                <svg className="w-5 h-5 text-black/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Back Link */}
                <section className="max-w-4xl mx-auto px-6 pb-20">
                    <Link href="/help" className="text-black/50 hover:text-black transition-colors text-sm">
                        ← Back to Help Center
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}

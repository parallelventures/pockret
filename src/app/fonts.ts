import localFont from "next/font/local";

export const ppAgrandirHeading = localFont({
    src: [
        {
            path: "../fonts/Agrandir Narrow Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Agrandir Narrow Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-heading",
    display: "swap",
});

export const ppAgrandirBody = localFont({
    src: "../fonts/PPAgrandir-Regular.otf",
    variable: "--font-body",
    display: "swap",
});

export const sfProDisplay = localFont({
    src: "../fonts/sfprodisplaymedium.otf",
    variable: "--font-sf-pro",
    display: "swap",
});

export const sfProDisplayRegular = localFont({
    src: "../fonts/sfprodisplayregular.otf",
    variable: "--font-sf-pro-regular",
    display: "swap",
});

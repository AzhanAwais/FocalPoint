import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
    title: "Focal Point",
    description: "Market research company in saudi arabia,automotive research, trend analysis, survey, questionare,face",
    icons: {
        icon: "/favicon.png", // or .svg/.png depending on what you're using
    },
    keywords: [
        "Market Research",
        "Business Consulting",
        "Saudi Arabia",
        "Automotive",
        "FMCG",
        "Real Estate",
        "Public Sector",
        "Technology",
        "Telecom",
        "Consumer Insights",
        "Quantitative Research",
        "Qualitative Research",
        "Data-driven Strategies",
        "Brand Positioning",
        "Product Trends",
        "Survey",
        "Questionnaire",
        "Industrial Manufacturing",
        "Food and Beverages"
    ],
};

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-inter",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["arabic"],
    variable: "--font-ibm-plex-sans-arabic",
});

export default async function RootLayout({ children }) {
    const locale = await getLocale();
    const messages = await getMessages();
    const direction = locale === "ar" ? "rtl" : "ltr";
    const fontFamily = locale === "ar" ? ibmPlexSansArabic.variable : inter.variable;

    return (
        <html lang={locale} dir={direction} suppressHydrationWarning>
            <body
                className={`${fontFamily} antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        {children}
                        <Toaster />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

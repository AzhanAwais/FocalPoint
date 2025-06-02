import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
    title: "Focal Point",
    description: "Focal Point is a market research company in Saudi Arabia offering consumer behavior analysis, real estate market reports, satisfaction surveys, automotive research, and strategic insights.",
    icons: {
        icon: "/favicon.png", // or .svg/.png depending on what you're using
    },
    keywords: [
        "Market Research Company in Saudi Arabia",
        "Comprehensive Marketing Studies",
        "Consumer Behavior Analysis",
        "Customer Satisfaction Measurement",
        "Real Estate Market Reports",
        "Automotive Market Research",
        "Brand Analysis and Insights",
        "Mystery Shopping Services",
        "Strategic Marketing Plans",
        "Customer Experience Optimization",
        "Key Performance Indicators (KPIs)",
        "Public Opinion Surveys",
        "Business Intelligence Solutions",
        "Market Feasibility Studies",
        "Food Sector Research",
        "Real Estate Market Analysis",
        "Digital Market Studies",
        "Statistical Data Analysis",
        "Monthly Market Reports",
        "Brand Monitoring Services"
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

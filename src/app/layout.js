import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
    title: "Focal Point",
    description: "Market research company in saudi arabia,automotive research, trend analysis, survey, questionare,face",
};

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-inter",
});


export default async function RootLayout({ children }) {
    const locale = await getLocale();
    const messages = await getMessages();
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
        <html lang={locale} dir={direction} suppressHydrationWarning>
            <body
                className={`${inter.variable} antialiased`}
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

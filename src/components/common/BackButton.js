'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useLocale } from 'next-intl'

const BackButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);
    const router = useRouter()
    const locale = useLocale();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button onClick={() => router.back()}>
            <img
                className={`w-[55px] h-[55px] lg:w-[86px] lg:h-[86px] ${locale == 'ar' ? 'rotate-180' : ''}`}
                src={(!theme || theme == "light") ? "/images/back-button.png" : "/images/back-button-dark.png"}
                alt="Back"
            />
        </button>
    )
}

export default BackButton
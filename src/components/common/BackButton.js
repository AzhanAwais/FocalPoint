'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useLocale } from 'next-intl'
import Image from 'next/image'

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
            <Image
                className={`w-[55px] h-[55px] lg:w-[86px] lg:h-[86px] ${locale == 'ar' ? 'rotate-180' : ''}`}
                src={(!theme || theme == "light") ? "/images/back-button.png" : "/images/back-button-dark.png"}
                alt="Back"
                width={50}
                height={50}
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" // Simple gray SVG
            />
        </button>
    )
}

export default BackButton
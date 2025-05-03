'use client'
import React, { useTransition } from 'react'
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/services/locale';

const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();

    const handleUserLocale = (locale) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`; // valid for 1 year
    }

    const handleChange = () => {
        startTransition(() => {
            handleUserLocale(locale == 'en' ? 'ar' : 'en');
            setUserLocale(locale == 'en' ? 'ar' : 'en');
            window.location.reload(); // reload to re-render with new locale
        });
    }

    return (
        <button disabled={isPending} onClick={handleChange}>
            {locale == "en" ? 'العربية' : "English"}
        </button>
    )
}

export default LanguageSwitcher
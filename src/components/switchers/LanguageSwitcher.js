import React, { useTransition } from 'react'
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();

    const handleChange = () => {
        startTransition(() => {
            setUserLocale(locale == 'en' ? 'ar' : 'en');
        });
    }

    return (
        <button disabled={isPending} onClick={handleChange}>
            {locale == "en" ? 'العربية' : "English"}
        </button>
    )
}

export default LanguageSwitcher
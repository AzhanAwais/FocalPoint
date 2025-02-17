'use client'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'

const CustomButton = ({ className, type, text, redirectLink }) => {
    const t = useTranslations('Common');
    const router = useRouter()

    const onClick = () => {
        if (redirectLink) {
            router.push(redirectLink)
        }
    }

    return (
        <button onClick={onClick} className={`custom-btn hover:animate-custom-pulse ${className} ${type == "filled" ? "btn-filled" : "btn-transparent"}`}>
            {t(text)}
        </button>
    )
}

export default CustomButton
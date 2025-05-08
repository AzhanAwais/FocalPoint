'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const CustomImage = ({ className, lightsrc, darksrc, alt }) => {
    const { theme } = useTheme()

    return (
        <img className={className} src={(theme == 'light' || !theme) ? lightsrc : darksrc} alt={alt} />
    )
}

export default CustomImage
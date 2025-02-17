'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const CustomImage = ({ className, lightsrc, darksrc }) => {
    const { theme } = useTheme()

    return (
        <img className={className} src={(theme == 'light' || !theme )? lightsrc : darksrc} />
    )
}

export default CustomImage
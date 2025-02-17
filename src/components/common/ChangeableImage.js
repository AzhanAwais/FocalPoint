'use client'
import { useTheme } from 'next-themes'
import React from 'react'

const ChangeableImage = ({ lightPath, darkPath, alt }) => {
    const { theme } = useTheme()

    return (
        <img src={(theme === "light" || !theme) ? lightPath : darkPath} alt={alt} />
    )
}

export default ChangeableImage
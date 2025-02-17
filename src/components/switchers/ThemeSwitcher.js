import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'
import React from 'react'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const locale = useLocale()

    return (
        <button
            className='flex rounded-full w-[24px] h-[24px] border-3 !border-primary dark:!border-primary-dark'
            onClick={() => setTheme((theme === 'light' || !theme) ? 'dark' : 'light')}
        >
            <span className={`inline-block h-full ${locale == "en" ? "rounded-l-full" : "rounded-r-full"} w-[50%] !bg-primary dark:!bg-primary-dark`}></span>
            <span className={`inline-block h-full ${locale == "en" ? "rounded-r-full" : "rounded-l-full"} w-[50%] !bg-light-secondary dark:!bg-primary`}></span>
        </button>
    )
}

export default ThemeSwitcher
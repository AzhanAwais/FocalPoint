'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import ThemeSwitcher from '../switchers/ThemeSwitcher'
import LanguageSwitcher from '../switchers/LanguageSwitcher'
import { usePathname } from 'next/navigation'
import { ROUTES, ROUTES_IDS } from '@/routes'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import CustomButton from '../common/CustomButton'

const Header = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme()
    const t = useTranslations('Common');
    const locale = useLocale()
    const pathname = usePathname()
    let moveToHomeArray = [
        ROUTES.ABOUT_US,
        ROUTES.INSIGHTS,
        ROUTES.CONTACT_US,
        ROUTES.AUTMOTIVE,
        ROUTES.GOVERNMENT_AND_PUBLIC_SECTOR,
        ROUTES.FMCG,
        ROUTES.FOOD_AND_BEVERAGE,
        ROUTES.REAL_ESTATE,
        ROUTES.INDUSTRIAL_AND_MANUFACTURING,
        ROUTES.CONSULTANT_AND_AGENCIES,
        ROUTES.OTHER,
        ROUTES.TECHNOLOGY_AND_TELECOM,
    ]

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Navbar expand="lg" className="bg-light-secondary dark:bg-primary sticky-top py-3">
            <Container fluid>
                <h2 className="text-primary dark:text-primary-dark">
                    <Link href={ROUTES.HOME}>
                        <img className='lg:ms-4 w-[180px] lg:w-[220px]' src={(theme == 'light' || !theme) ? '/images/logo-light.png' : '/images/logo-dark.png'} alt='focal point' />
                    </Link>
                </h2>

                <Navbar.Toggle className='bg-primary-dark focus:shadow-none' aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={locale == 'en' ? "ms-auto" : "!ms-auto"}>
                        <Link href={moveToHomeArray.includes(pathname) ? `/#${ROUTES_IDS.HOME}` : `#${ROUTES_IDS.HOME}`} className='navlink hover-underline'>
                            {t('menu_1')}
                        </Link>

                        <Link href={ROUTES.ABOUT_US} className='navlink hover-underline'>
                            {t('menu_7')}
                        </Link>

                        <Link href={moveToHomeArray.includes(pathname) ? `/#${ROUTES_IDS.SERVICES}` : `#${ROUTES_IDS.SERVICES}`} className='navlink hover-underline'>
                            {t('menu_2')}
                        </Link>

                        <Link href={moveToHomeArray.includes(pathname) ? `/#${ROUTES_IDS.INDUSTRIES}` : `#${ROUTES_IDS.INDUSTRIES}`} className='navlink hover-underline'>
                            {t('menu_3')}
                        </Link>

                        <Link href={ROUTES.INSIGHTS} className='navlink hover-underline'>
                            {t('menu_4')}
                        </Link>

                        <Link href="#" className='navlink'>
                            <ThemeSwitcher />
                        </Link>

                        <Link href="#" className='navlink'>
                            <LanguageSwitcher />
                        </Link>

                        <Link href={ROUTES.CONTACT_US} className='navlink'>
                            <CustomButton className="w-auto h-auto px-4 py-1 font-semibold" type="filled" text="menu_5" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
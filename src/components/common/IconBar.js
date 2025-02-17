import { ROUTES_IDS } from '@/routes'
import Link from 'next/link'
import React from 'react'

const IconBar = () => {
    const icons = [
        {
            href: `#${ROUTES_IDS.HOME}`,
            icon: './images/home1.png',
            alt: 'Go to Home page'
        },
        {
            href: `#${ROUTES_IDS.ABOUT_US}`,
            icon: './images/home2.png',
            alt: 'Go to About Us page'
        },
        {
            href: `#${ROUTES_IDS.SERVICES}`,
            icon: './images/home3.png',
            alt: 'Explore Services page'
        },
        {
            href: `#${ROUTES_IDS.INDUSTRIES}`,
            icon: './images/home4.png',
            alt: 'View Industries page'
        },
        {
            href: `#${ROUTES_IDS.INSIGHTS}`,
            icon: './images/home5.png',
            alt: 'Explore Insights page'
        },
        {
            href: `#${ROUTES_IDS.CONTACT_US}`,
            icon: './images/home6.png',
            alt: 'Go to Contact Us page'
        },

    ]

    return (
        <div className='fixed hidden lg:block md:left-5 xxl:left-9 top-28'>
            <div className='flex items-center justify-center flex-col'>
                {
                    icons?.map((item, index) => (
                        <Link href={item.href} key={index}>
                            <div className='home-circle'>
                                <img src={item.icon} alt={item.alt} className='w-[18px] h-[18px]' />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default IconBar
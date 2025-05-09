'use client'
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Carousel } from 'react-bootstrap'

const CustomCarousel = ({ banners }) => {
    const locale = useLocale();

    const convertSecToMilli = (sec) => {
        return sec * 1000;
    }
    return (
        <Carousel className='banner'>
            {
                banners?.map((item, index) => (
                    <Carousel.Item key={index} interval={convertSecToMilli(item?.interval)}>
                        <Link href={locale == 'en' ? item?.on_click_url_en : item?.on_click_url_ar} target='_blank' >
                            {
                                item?.type == 'image' ?
                                    <Image
                                        src={locale == 'en' ? item?.media_url_en : item?.media_url_ar}
                                        alt="New car prices in GCC"
                                        layout='fill'
                                        objectFit='contain'
                                        className='!relative'
                                        loading='eager'
                                        placeholder="blur"
                                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" // Simple gray SVG
                                    />
                                    :
                                    <video src={locale == 'en' ? item?.media_url_en : item?.media_url_ar} type="video/mp4" className='w-full' autoPlay muted loop />
                            }
                        </Link>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default CustomCarousel
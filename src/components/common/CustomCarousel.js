'use client'
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const CustomCarousel = () => {
    const locale = useLocale();
    const [banners, setBanners] = useState([]);

    const fetchBanners = async () => {
        const bannersCollection = collection(db, "Banners");
        const bannersSnapshot = await getDocs(bannersCollection);
        const bannersList = bannersSnapshot?.docs?.map(doc => ({
            ...doc.data()
        }))?.filter((item) => item.status == true)?.sort((a, b) => a.position - b.position)
        setBanners(bannersList);
    };

    const convertSecToMilli = (sec) => {
        return sec * 1000;
    }

    useEffect(() => {
        fetchBanners();
    }, []);

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
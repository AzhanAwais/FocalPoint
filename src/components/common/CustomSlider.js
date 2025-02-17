'use client'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';
const CustomSlider = () => {
    const [clients, setClients] = useState([]);
    const settings = {
        infinite: true,
        slidesToShow: 6, // Number of slides to show
        slidesToScroll: 1,
        arrows: false,
        nextArrow: null,
        prevArrow: null,
        dots: false,
        responsive: [
            {
                breakpoint: 768, // Adjusts for smaller screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const fetchClients = async () => {
        const clientsCollection = collection(db, "OurClients");
        const clientsSnapshot = await getDocs(clientsCollection);
        const clientList = clientsSnapshot.docs.map(doc => ({
            ...doc.data()
        }))?.filter((item) => item?.status == true)
        setClients(clientList);
    };

    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <div id="slider-wrapper" className='company-slider'>
            <Slider autoplay autoplaySpeed={3000} {...settings}>
                {
                    clients?.map((item, index) => (
                        <img
                            key={index}
                            className="w-[60px] h-[60px] object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                            src={item?.company_url}
                            alt="Best Service provider in Saudia Arabia"
                        />
                    ))
                }
            </Slider>
        </div>
    )
}

export default CustomSlider
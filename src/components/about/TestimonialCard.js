'use client'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { Carousel } from 'react-bootstrap';
import { useLocale } from 'next-intl';
const TestimonialCard = () => {
    const [testimonials, setTestimonials] = useState([]);
    const locale = useLocale();

    const fetchTestimonials = async () => {
        const testimonialCollection = collection(db, "Testimonial");
        const testimonialSnapshot = await getDocs(testimonialCollection);
        const testimonialList = testimonialSnapshot.docs.map(doc => ({
            ...doc.data()
        }))?.filter((item) => item.status == true)
        setTestimonials(testimonialList);
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    return (
        <Carousel className='testimonial-carousel'>
            {
                testimonials?.map((item, index) => (
                    <Carousel.Item key={index} interval={2000}>
                        <div className='testimonial-card'>
                            <div className='w-[220px] h-[220px] rounded-full'>
                                <img
                                    className="w-full h-full object-contain"
                                    src={item?.company_url}
                                    alt="Testimonial representing feedback from a client."
                                />
                            </div>

                            <div className='w-full'>
                                <h4 className='text-2xl lg:text-5xl font-bold'>
                                    {
                                        locale == 'en' ?
                                            item?.client_name_l?.en
                                            :
                                            item?.client_name_l?.ar
                                    }
                                </h4>
                                <h6 className='text-base lg:text-3xl font-semibold mt-3'>
                                    {
                                        locale == 'en' ?
                                            item?.client_jobtitle_l?.en
                                            :
                                            item?.client_jobtitle_l?.ar
                                    }
                                </h6>
                                <p className='sub-text mt-4'>
                                    {
                                        locale == 'en' ?
                                            item?.client_testimonila_l?.en
                                            :
                                            item?.client_testimonila_l?.ar
                                    }
                                </p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default TestimonialCard
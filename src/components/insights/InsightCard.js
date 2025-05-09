'use client'
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import Image from 'next/image';

const InsightCard = ({ limit = 0 }) => {
    const [blogs, setBlogs] = useState([]);
    const locale = useLocale();
    const t = useTranslations('Common');

    const fetchBlogs = async () => {
        const blogsCollection = collection(db, "Blog");
        const blogsSnapshot = await getDocs(blogsCollection);

        let blogs = blogsSnapshot.docs
            .map(doc => ({
                ...doc.data()
            }))
            .filter(blog => blog.status == true)

        blogs = blogs.sort((a, b) =>
            moment(b.date.en, "DD-MM-YYYY").isBefore(moment(a.date.en, "DD-MM-YYYY")) ? -1 : 1
        );

        if (limit) {
            blogs = blogs.slice(0, limit);
        }

        setBlogs(blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, [limit]);

    return (
        <>
            {
                blogs?.map((item, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 mb-4 md:mb-0">
                        <Link href={locale == 'en' ? item?.section_3_i : item?.section_4_i} target='_blank'>
                            <div className='w-full overflow-hidden '>
                                <Image
                                    className='transform transition-transform duration-300 hover:scale-105'
                                    src={
                                        locale == 'en' ?
                                            item?.section_1_i || './images/general-placeholder.jpg'
                                            :
                                            item?.section_2_i || './images/general-placeholder.jpg'
                                    }
                                    alt={locale == 'en' ? item?.title?.en : item?.title?.ar}
                                    width={500}
                                    height={300}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.src = placeholderImage;
                                    }}
                                    loading="lazy"
                                    quality={80}
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" // Simple gray SVG
                                />
                            </div>
                            <span className='inline-block mt-1 text-sm lg:text-base'>
                                {
                                    locale == 'en' ?
                                        item?.date?.en
                                        :
                                        item?.date?.ar
                                }
                            </span>
                            <h6 className='sub-heading mt-1'>
                                {
                                    locale == 'en' ?
                                        item?.title?.en
                                        :
                                        item?.title?.ar
                                }
                            </h6>
                            <span className='inline-block mt-2 text-sm lg:text-base'>
                                {t('written_by')} &nbsp;
                                {
                                    locale == 'en' ?
                                        item?.written_by?.en
                                        :
                                        item?.written_by?.ar
                                }
                            </span>
                            <div className='mt-3 flex items-center flex-wrap gap-2'>
                                {
                                    item?.keywords?.map((item, index) => (
                                        <div key={index} className='chip'>
                                            <span className='text-sm lg:text-base'>
                                                {
                                                    locale == 'en' ?
                                                        item?.en
                                                        :
                                                        item?.ar
                                                }
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </Link>
                    </div>
                ))
            }

        </>
    )
}

export default InsightCard
import ContactForm from '@/components/contact/ContactForm'
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { META_AR } from '@/seo/seo-ar';
import { META_EN } from '@/seo/seo-en';
import { ROUTES } from '@/routes';

const page = () => {
    const t = useTranslations('Common');
    const META = locale === 'ar' ? META_AR : META_EN

    return (
        <>
          <Head>
                <title>{META.CONTACT_US.title}</title>
                <meta name="description" content={META.CONTACT_US.description} />
                {/* Canonical URL */}
                <link rel="canonical" href={`${DOMAIN}${ROUTES.CONTACT_US}`} />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={META.CONTACT_US.title} />
                <meta property="og:description" content={META.CONTACT_US.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}${ROUTES.CONTACT_US}`} />
                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content={META.CONTACT_US.title} />
                <meta name="twitter:description" content={META.CONTACT_US.description} />
                {/* Keywords */}
                <meta name="keywords" content={META.CONTACT_US.keywords} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4 mb-24 lg:mb-36">
                    <div className="col-span-12 lg:col-span-6 !order-2 lg:!order-1">
                        <h2 className='main-heading'>{t('contact_h')}</h2>
                        <p className='caption my-8'>
                            {t('contact_b')}
                        </p>

                        <ContactForm />
                    </div>

                    <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                        <Link href={"https://maps.app.goo.gl/17w7SJzSM3WcxNCR6"} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={'/images/contact-us.png'}
                                alt="Map showing the location of our office in Saudi Arabia"
                                layout='fill'
                                objectFit='cover'
                                className='!relative mx-auto'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default page
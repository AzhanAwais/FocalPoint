import ContactForm from '@/components/contact/ContactForm'
import { META_DESCRIPTION_ABOUT_CONTACT_US, META_TITLE_CONTACT_US } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
    const t = useTranslations('Common');

    return (
        <>
            <Head>
                <title>{META_TITLE_CONTACT_US}</title>
                <meta name="description" content={META_DESCRIPTION_ABOUT_CONTACT_US} />
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
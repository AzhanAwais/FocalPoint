import TeamCard from '@/components/about/TeamCard';
import TestimonialCard from '@/components/about/TestimonialCard';
import ChangeableImage from '@/components/common/ChangeableImage';
import CustomButton from '@/components/common/CustomButton';
import FooterLink from '@/components/common/FooterLink';
import Partner from '@/components/partner/Partner';
import { ROUTES } from '@/routes';
import { META_AR } from '@/seo/seo-ar';
import { META_EN } from '@/seo/seo-en';
import { useLocale, useTranslations } from 'next-intl';
import Head from 'next/head';
import React from 'react'

const AboutUs = () => {
    const t = useTranslations('Common');
    const locale = useLocale()
    const META = locale === 'ar' ? META_AR : META_EN

    return (
        <>
            <Head>
                <title>{META.ABOUT_US.title}</title>
                <meta name="description" content={META.ABOUT_US.description} />
                {/* Canonical URL */}
                <link rel="canonical" href={`${DOMAIN}${ROUTES.ABOUT_US}`} />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={META.ABOUT_US.title} />
                <meta property="og:description" content={META.ABOUT_US.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}${ROUTES.ABOUT_US}`} />
                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content={META.ABOUT_US.title} />
                <meta name="twitter:description" content={META.ABOUT_US.description} />
                {/* Keywords */}
                <meta name="keywords" content={META.ABOUT_US.keywords} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                {/* About Us */}
                <div className="grid grid-cols-12 gap-4 mb-24 lg:mb-36">
                    <div className="col-span-12 lg:col-span-8 !order-2 lg:!order-1">
                        <h2 className={`main-heading text-center ${(locale == 'en' || !locale) ? 'lg:!text-left' : 'lg:!text-right'}`}>{t('aboutus_h')}</h2>
                        <p className={`caption ${(locale == 'en' || !locale) ? 'border-left' : 'border-right'} mt-8`}>
                            {t('aboutus_b')}
                        </p>

                        <CustomButton redirectLink={ROUTES.CONTACT_US} className="mt-8" type="filled" text="get_in_touch" />
                    </div>

                    <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 mx-auto">
                        <ChangeableImage
                            lightPath={'./images/about-light.png'}
                            darkPath={'./images/about-dark.png'}
                            alt={'Expert business strategy consulting for sustainable growth in Jeddah.'}
                        />
                    </div>
                </div>

                {/* Our Vision */}
                <div className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 lg:col-span-8 !order-2 lg:!order-1 my-auto">
                        <h2 className={`main-heading text-center ${(locale == 'en' || !locale) ? 'lg:!text-left' : 'lg:!text-right'} `}>{t('our_vision_h')}</h2>
                        <p className={`caption ${(locale == 'en' || !locale) ? 'border-left' : 'border-right'} mt-8`}>
                            {t('our_vision_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 mx-auto">
                        <ChangeableImage
                            lightPath={'./images/ourvision_dark.png'}
                            darkPath={'./images/ourvision_light.png'}
                            alt={"Company's vision for future growth and innovation."}
                        />
                    </div>
                </div>

                {/* Our History */}
                <div className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 lg:col-span-4 !order-2 lg:!order-1 mx-auto lg:mx-[unset]">
                        <ChangeableImage
                            lightPath={'./images/ourhistory_dark.png'}
                            darkPath={'./images/ourhistory_light.png'}
                            alt={'Historical timeline representing our growth journey.'}
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-8 !order-2 lg:!order-1 lg:m-auto">
                        <h2 className={`main-heading text-center ${(locale == 'en' || !locale) ? 'lg:!text-left' : 'lg:!text-right'}`}>{t('our_history_h')}</h2>
                        <p className='caption border-left ps-3 mt-8'>
                            {t('our_history_b')}
                        </p>
                    </div>
                </div>

                {/* Our Team */}
                <div className="grid grid-cols-12 gap-4 mt-24 lg:mt-36">
                    <div className="col-span-12 mb-8 lg:mb-12">
                        <div className='text-center'>
                            <h2 className='main-heading '>
                                {t('our_team_h')}
                            </h2>
                            <p className='sub-text mt-8'>
                                {t('our_team_b')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 xl:grid-cols-10 gap-4">
                    <TeamCard />
                </div>

                {/* Our Partners */}
                <div className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <Partner />
                </div>

                {/* Testimonials */}
                <div className="col-span-12">
                    <TestimonialCard />
                </div>

                {/* Footer Link */}
                <div className="grid grid-cols-12 gap-4 mt-24 lg:mt-36">
                    <FooterLink />
                </div>

            </div>
        </>

    )
}

export default AboutUs
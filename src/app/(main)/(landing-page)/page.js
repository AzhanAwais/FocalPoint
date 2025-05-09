import CustomButton from '@/components/common/CustomButton'
import CustomCarousel from '@/components/common/CustomCarousel'
import IndustriesCard from '@/components/industries/IndustriesCard'
import InsightCard from '@/components/insights/InsightCard'
import ServicesBox from '@/components/services/ServicesBox'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import FooterLink from '@/components/common/FooterLink'
import Partner from '@/components/partner/Partner'
import ChangeableImage from '@/components/common/ChangeableImage'
import Link from 'next/link'
import { ROUTES, ROUTES_IDS } from '@/routes'
import IconBar from '@/components/common/IconBar'
import MoveToTop from '@/components/common/MoveToTop'
import Head from 'next/head'
import { META_DESCRIPTION_HOME, META_TITLE_HOME } from '@/constants'
import MapWrapper from '@/components/wrapper/MapWrapper'
import Banner from '@/components/common/Banner'

function page() {
    const t = useTranslations('Common');
    const locale = useLocale();

    return (
        <>
            <Head>
                <title>{META_TITLE_HOME}</title>
                <meta name="description" content={META_DESCRIPTION_HOME} />
            </Head>

            <div className="relative max-w-section m-auto pt-10 pb-20">
                {/* Icon Bar */}
                <IconBar />

                {/* Carousel */}
                <div id={ROUTES_IDS.HOME} className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <Banner />
                    </div>
                </div>

                {/* Generate Actionable Insights */}
                <div className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 lg:col-span-8 !order-2 lg:!order-1">
                        <h2 className='main-heading hidden lg:block'>
                            {t('landingpage_h_1')} <br />
                            <span className='text-green'>{t('landingpage_h_2')}</span> <br />
                            {t('landingpage_h_3')}
                        </h2>

                        <h2 className='main-heading text-center block lg:hidden'>
                            {t('landingpage_h_1')}
                            <span className='text-green'> {t('landingpage_h_2')}</span> <br />
                            {t('landingpage_h_3')}
                        </h2>

                        <p className={`caption ${(locale == 'en' || !locale) ? 'border-left' : 'border-right'} mt-8`}>
                            {t('landingpage_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 mx-auto">
                        <ChangeableImage
                            lightPath={'./images/globe-light.png'}
                            darkPath={'./images/globe-dark.png'}
                            alt={'Professional market research services tailored for Saudi businesses.'}
                        />
                    </div>
                </div>

                {/* About */}
                <div id={ROUTES_IDS.ABOUT_US} className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 lg:col-span-8 !order-2 lg:!order-1">
                        <h2 className={`main-heading text-center ${(locale == 'en' || !locale) ? 'lg:!text-left' : 'lg:!text-right'} `}>{t('aboutus_h')}</h2>
                        <p className={`caption ${(locale == 'en' || !locale) ? 'border-left' : 'border-right'} mt-8`}>
                            {t('aboutus_b')}
                        </p>

                        <CustomButton redirectLink={ROUTES.ABOUT_US} className="mt-8" type="filled" text="learn_more" />
                    </div>

                    <div className="col-span-12 lg:col-span-4 order-1 lg:order-2 mx-auto">
                        <ChangeableImage
                            lightPath={'./images/about-light.png'}
                            darkPath={'./images/about-dark.png'}
                            alt={'Expert business strategy consulting for sustainable growth in Jeddah.'}
                        />
                    </div>
                </div>

                {/* Services */}
                <div id={ROUTES_IDS.SERVICES} className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 mb-8 lg:mb-12">
                        <div className='text-center'>
                            <h2 className='main-heading '>
                                {t('our_services_h')}
                            </h2>
                            <p className='sub-text text-center mt-8'>
                                {t('our_services_b')}
                            </p>
                        </div>
                    </div>

                    <ServicesBox />
                </div>

                {/* Industries */}
                <div id={ROUTES_IDS.INDUSTRIES} className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 mb-8 lg:mb-12">
                        <div className='text-center'>
                            <h2 className='main-heading '>
                                {t('industries_h')}
                            </h2>
                        </div>
                    </div>

                    <IndustriesCard />
                </div>

                {/* Insights */}
                <div id={ROUTES_IDS.INSIGHTS} className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 mb-8 lg:mb-12">
                        <div className='text-center'>
                            <h2 className='main-heading '>
                                {t('blogs_h')}
                            </h2>
                            <p className='sub-text  mt-8'>
                                {t('blogs_b')}
                            </p>
                        </div>
                    </div>

                    <InsightCard limit={4} />

                    <div className="col-span-12 mx-auto">
                        <Link href={ROUTES.INSIGHTS}>
                            <CustomButton type="filled" text="see_more" />
                        </Link>
                    </div>

                </div>

                {/* Contact */}
                <div id={ROUTES_IDS.CONTACT_US} className="grid grid-cols-12 gap-4 my-24 lg:my-36">
                    <div className="col-span-12 mb-8 lg:mb-12">
                        <div className='text-center'>
                            <h2 className='main-heading '>
                                {t('contact_h')}
                            </h2>
                            <p className='sub-text text-center mt-8'>
                                {t('contact_b')}
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="col-span-12">
                        <MapWrapper />
                    </div>

                    <FooterLink />
                </div>

                {/* Partner */}
                <div className="grid grid-cols-12 gap-4 mt-24 lg:mt-36">
                    <Partner />
                </div>

                {/* Move to top */}
                <MoveToTop />
            </div>
        </>
    )
}

export default page

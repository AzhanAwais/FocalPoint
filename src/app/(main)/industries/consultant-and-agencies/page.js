import React from 'react'
import BackButton from '@/components/common/BackButton';
import { CONSULTANT_AND_AGENCIES, META_DESCRIPTION_CONSULTANT_AND_AGENCIES, META_TITLE_CONSULTANT_AND_AGENCIES } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';
import Image from 'next/image';
import { META_AR } from '@/seo/seo-ar';
import { META_EN } from '@/seo/seo-en';
import { ROUTES } from '@/routes';

const ConsultantAndAgencies = () => {
    const t = useTranslations('Common');
    const data = CONSULTANT_AND_AGENCIES(t)
    const META = locale === 'ar' ? META_AR : META_EN

    return (
        <>
            <Head>
                <title>{META.INDUSTRIES.CONSULTANT_AND_AGENCIES.title}</title>
                <meta name="description" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.description} />
                {/* Canonical URL */}
                <link rel="canonical" href={`${DOMAIN}${ROUTES.CONSULTANT_AND_AGENCIES}`} />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.title} />
                <meta property="og:description" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}${ROUTES.CONSULTANT_AND_AGENCIES}`} />
                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.title} />
                <meta name="twitter:description" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.description} />
                {/* Keywords */}
                <meta name="keywords" content={META.INDUSTRIES.CONSULTANT_AND_AGENCIES.keywords} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading  max-w-[700px]'>
                            {t('indust_consultant_h')}
                        </h2>
                        <p className='caption  mt-8'>
                            {t('indust_consultant_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <Image
                            src="/images/consultantNew.png"
                            alt="Professional market research services tailored for Saudi businesses"
                            width={500}
                            height={500}
                            loading="lazy"
                            quality={80}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" // Simple gray SVG
                        />
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <TabsRender defaultValue={'indust_consultant_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsultantAndAgencies




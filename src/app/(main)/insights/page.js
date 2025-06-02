import InsightCard from '@/components/insights/InsightCard';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import React from 'react'
import { META_AR } from '@/seo/seo-ar';
import { META_EN } from '@/seo/seo-en';
import { ROUTES } from '@/routes';

const Insights = () => {
    const t = useTranslations('Common');
    const META = locale === 'ar' ? META_AR : META_EN

    return (
        <>
            <Head>
                <title>{META.INSIGHTS.title}</title>
                <meta name="description" content={META.INSIGHTS.description} />
                {/* Canonical URL */}
                <link rel="canonical" href={`${DOMAIN}${ROUTES.INSIGHTS}`} />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={META.INSIGHTS.title} />
                <meta property="og:description" content={META.INSIGHTS.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}${ROUTES.INSIGHTS}`} />
                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content={META.INSIGHTS.title} />
                <meta name="twitter:description" content={META.INSIGHTS.description} />
                {/* Keywords */}
                <meta name="keywords" content={META.INSIGHTS.keywords} />
            </Head>

            <div className="max-w-section m-auto py-10 lg:py-20">
                <div className="grid grid-cols-12 gap-4 mb-20">
                    <div className="col-span-12">
                        <h2 className='text-center main-heading border-t-2 border-b-2 !border-primary dark:!border-primary-dark py-8'>
                            {t('the_blog')}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <InsightCard />
                </div>
            </div>
        </>
    )
}

export default Insights
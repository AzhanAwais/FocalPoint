import InsightCard from '@/components/insights/InsightCard';
import { META_DESCRIPTION_INSGIGHT, META_TITLE_INSGIGHT } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import React from 'react'

const Insights = () => {
    const t = useTranslations('Common');

    return (
        <>
            <Head>
                <title>{META_TITLE_INSGIGHT}</title>
                <meta name="description" content={META_DESCRIPTION_INSGIGHT} />
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
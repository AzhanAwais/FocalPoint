import React from 'react'
import BackButton from '@/components/common/BackButton'
import { useTranslations } from 'next-intl';
import { INDUSTRY_AUTOMOTIVE_DATA, META_DESCRIPTION_AUTOMOTIVE, META_TITLE_AUTOMOTIVE } from '@/constants';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';

const Automotive = () => {
    const t = useTranslations('Common');
    const data = INDUSTRY_AUTOMOTIVE_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_AUTOMOTIVE}</title>
                <meta name="description" content={META_DESCRIPTION_AUTOMOTIVE} />
            </Head>
            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading '>
                            {t('indust_automotive_h')}
                        </h2>
                        <p className='caption mt-8'>
                            {t('indust_automotive_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div>
                            <img src="/images/automative_page.png" alt="Custom market research services for Saudi Arabia’s automotive sector" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <TabsRender defaultValue={'indust_automotive_s1_h'} data={data} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Automotive
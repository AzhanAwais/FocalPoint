import React from 'react'
import BackButton from '@/components/common/BackButton';
import { FMCG_DATA, META_DESCRIPTION_FMCG, META_TITLE_FMCG } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';

const Fmcg = () => {
    const t = useTranslations('Common');
    const data = FMCG_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_FMCG}</title>
                <meta name="description" content={META_DESCRIPTION_FMCG} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading  max-w-[700px]'>
                            {t('indust_fmcg_h')}
                        </h2>
                        <p className='caption  mt-8'>
                            {t('indust_fmcg_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div>
                            <img src="/images/fpg.png" alt="Market analysis and consulting for fast-moving consumer goods" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <TabsRender defaultValue={'indust_fmcg_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fmcg
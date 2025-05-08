import React from 'react'
import BackButton from '@/components/common/BackButton';
import { CONSULTANT_AND_AGENCIES, META_DESCRIPTION_CONSULTANT_AND_AGENCIES, META_TITLE_CONSULTANT_AND_AGENCIES } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';

const ConsultantAndAgencies = () => {
    const t = useTranslations('Common');
    const data = CONSULTANT_AND_AGENCIES(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_CONSULTANT_AND_AGENCIES}</title>
                <meta name="description" content={META_DESCRIPTION_CONSULTANT_AND_AGENCIES} />
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
                        <div>
                            <img src="/images/consultantNew.png" alt="Professional market research services tailored for Saudi businesses" />
                        </div>
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




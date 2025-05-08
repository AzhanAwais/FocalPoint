import React from 'react'
import BackButton from '@/components/common/BackButton';
import { META_DESCRIPTION_OTHER, META_TITLE_OTHER, OTHER_DATA } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';
const Other = () => {
    const t = useTranslations('Common');
    const data = OTHER_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_OTHER}</title>
                <meta name="description" content={META_DESCRIPTION_OTHER} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading  max-w-[700px]'>
                            {t('indust_tech_h')}
                        </h2>
                        <p className='caption  mt-8'>
                            {t('indust_tech_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div>
                            <img src="/images/technologyNew.png" alt="Comprehensive product testing to ensure market success in Saudi Arabia." />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <TabsRender defaultValue={'indust_realestate_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Other
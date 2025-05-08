import React from 'react'
import BackButton from '@/components/common/BackButton';
import { FOOD_AND_BEVERAGE_DATA, META_DESCRIPTION_FOOD_AND_BEVRAGES, META_TITLE_FOOD_AND_BEVRAGES } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';

const FoodAndBeverage = () => {
    const t = useTranslations('Common');
    const data = FOOD_AND_BEVERAGE_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_FOOD_AND_BEVRAGES}</title>
                <meta name="description" content={META_DESCRIPTION_FOOD_AND_BEVRAGES} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading  max-w-[700px]'>
                            {t('indust_food_h')}
                        </h2>
                        <p className='caption mt-8'>
                            {t('indust_food_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div>
                            <img src="/images/foodNew.png" alt="Detailed shopper research to boost retail performance." />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                        <TabsRender defaultValue={'indust_food_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodAndBeverage
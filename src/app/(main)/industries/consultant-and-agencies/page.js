import React from 'react'
import BackButton from '@/components/common/BackButton';
import { CONSULTANT_AND_AGENCIES, META_DESCRIPTION_CONSULTANT_AND_AGENCIES, META_TITLE_CONSULTANT_AND_AGENCIES } from '@/constants';
import { useLocale, useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Head from 'next/head';

const ConsultantAndAgencies = () => {
    const t = useTranslations('Common');
    const data = CONSULTANT_AND_AGENCIES(t)
    const locale = useLocale();

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
                        <Tabs defaultValue={t('indust_consultant_s1_h')} >
                            <div className='flex overflow-x-auto py-8 hide-scrollbar'>
                                {
                                    data?.map((item, index) => (
                                        <TabsList key={index} className="bg-transparent ">
                                            <TabsTrigger
                                                className='tab-trigger'
                                                value={item?.tabKey}
                                            >
                                                {item?.heading}
                                            </TabsTrigger>
                                        </TabsList>
                                    ))
                                }
                            </div>

                            {
                                data?.map((item, index) => (
                                    <TabsContent key={index} value={item?.tabKey}>
                                        <div>
                                            <h2 className='sub-heading '>{item?.heading}</h2>
                                            <p className='sub-text  mt-8'>{item?.content}</p>
                                        </div>

                                        <div className='mt-8'>
                                            <h2 className='sub-heading '>{item?.helpHeading}</h2>
                                            <div className="grid grid-cols-12 gap-4 mt-8" dir={locale == 'ar' ? 'rtl' : 'ltr'}>
                                                {
                                                    item?.helpImages?.map((dt, index) => (
                                                        <div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
                                                            <div className='help-box'>
                                                                <img className='w-[80px] h-[80px]' src={dt?.imageUrl} alt={dt?.alt} />
                                                                <h3 className=' sub-heading mt-4 text-center !text-primary'>{dt?.heading}</h3>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </TabsContent>
                                ))
                            }
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsultantAndAgencies




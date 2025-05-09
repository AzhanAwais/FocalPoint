import React from 'react'
import BackButton from '@/components/common/BackButton';
import { INDUSTRIAL_MANUFACTURING_DATA, META_DESCRIPTION_INDUSTRIAL_MANUFACTURING, META_TITLE_INDUSTRIAL_MANUFACTURING } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';
import Image from 'next/image';

const IndustrialAndManufacturing = () => {
    const t = useTranslations('Common');
    const data = INDUSTRIAL_MANUFACTURING_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_INDUSTRIAL_MANUFACTURING}</title>
                <meta name="description" content={META_DESCRIPTION_INDUSTRIAL_MANUFACTURING} />
            </Head>

            <div className="max-w-section m-auto pt-10 lg:pt-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className='col-span-12'>
                        <BackButton />
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <h2 className='main-heading max-w-[700px]'>
                            {t('indust_industrial_h')}
                        </h2>
                        <p className='caption  mt-8'>
                            {t('indust_industrial_b')}
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <Image
                            src="/images/industrialNew.png"
                            alt="Innovative branding solutions to elevate your market presence."
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
                        <TabsRender defaultValue={'indust_industrial_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustrialAndManufacturing


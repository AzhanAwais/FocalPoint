import React from 'react'
import BackButton from '@/components/common/BackButton';
import { META_DESCRIPTION_TECHNOLOGY_AND_TELECOM, META_TITLE_TECHNOLOGY_AND_TELECOM, TECHNOLOGY_AND_TELECOM_DATA } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';
import Image from 'next/image';
const TechnologyAndTelecom = () => {
    const t = useTranslations('Common');
    const data = TECHNOLOGY_AND_TELECOM_DATA(t)

    return (
        <>
            <Head>
                <title>{META_TITLE_TECHNOLOGY_AND_TELECOM}</title>
                <meta name="description" content={META_DESCRIPTION_TECHNOLOGY_AND_TELECOM} />
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
                        <Image
                            src="/images/technologyNew.png"
                            alt="Focal Point's modern office in Jeddah, Saudi Arabia."
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
                        <TabsRender defaultValue={'indust_realestate_s1_h'} data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologyAndTelecom
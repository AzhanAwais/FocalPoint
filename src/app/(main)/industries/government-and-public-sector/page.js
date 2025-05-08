"use client"
import React, { useRef } from 'react'
import BackButton from '@/components/common/BackButton';
import { GOVERNMENT_AND_PUBLIC_SECTOR_DATA, META_DESCRIPTION_GOVERNMENT_AND_PUBLIC_SECTOR, META_TITLE_GOVERNMENT_AND_PUBLIC_SECTOR } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';

const GovernmentAndPublicSector = () => {
  const t = useTranslations('Common');
  const data = GOVERNMENT_AND_PUBLIC_SECTOR_DATA(t)

  return (
    <>
      <Head>
        <title>{META_TITLE_GOVERNMENT_AND_PUBLIC_SECTOR}</title>
        <meta name="description" content={META_DESCRIPTION_GOVERNMENT_AND_PUBLIC_SECTOR} />
      </Head>

      <div className="max-w-section m-auto pt-10 lg:pt-20">
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-12'>
            <BackButton />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <h2 className='main-heading  max-w-[700px]'>
              {t('indust_govsec_h')}
            </h2>
            <p className='caption  mt-8'>
              {t('indust_govsec_b')}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div>
              <img src="/images/automative_page.png" alt="Expert business strategy consulting for sustainable growth in Jeddah." />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <TabsRender defaultValue={'indust_govsec_h'} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GovernmentAndPublicSector
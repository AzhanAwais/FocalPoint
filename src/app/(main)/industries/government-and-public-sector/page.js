"use client"
import React from 'react'
import BackButton from '@/components/common/BackButton';
import { GOVERNMENT_AND_PUBLIC_SECTOR_DATA } from '@/constants';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import TabsRender from '@/components/industries/TabsRender';
import Image from 'next/image';
import { META_AR } from '@/seo/seo-ar';
import { META_EN } from '@/seo/seo-en';
import { ROUTES } from '@/routes';

const GovernmentAndPublicSector = () => {
  const t = useTranslations('Common');
  const data = GOVERNMENT_AND_PUBLIC_SECTOR_DATA(t)
  const META = locale === 'ar' ? META_AR : META_EN

  return (
    <>
      <Head>
        <title>{META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.title}</title>
        <meta name="description" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.description} />
        {/* Canonical URL */}
        <link rel="canonical" href={`${DOMAIN}${ROUTES.GOVERNMENT_AND_PUBLIC_SECTOR}`} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.title} />
        <meta property="og:description" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${DOMAIN}${ROUTES.GOVERNMENT_AND_PUBLIC_SECTOR}`} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.title} />
        <meta name="twitter:description" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.description} />
        {/* Keywords */}
        <meta name="keywords" content={META.INDUSTRIES.GOVERNMENT_AND_PUBLIC_SECTOR.keywords} />
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
            <Image
              src="/images/automative_page.png"
              alt="Expert business strategy consulting for sustainable growth in Jeddah."
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
            <TabsRender defaultValue={'indust_govsec_h'} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GovernmentAndPublicSector
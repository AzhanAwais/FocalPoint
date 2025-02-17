import { ROUTES } from '@/routes';
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'

const IndustriesCard = () => {
    const t = useTranslations('Common');

    return (
        <>
            {/* Automotive */}
            <div className="col-span-12 md:col-span-6">
                <Link href={ROUTES.AUTMOTIVE} className=''>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/automotive.png" alt='Expert Automotive Market Insights in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_automotive_h')}</h6>
                        <p className='caption mt-3'>{t('indust_automotive_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Government and Public Sector */}
            <div className="col-span-12 md:col-span-6 lg:mt-36">
                <Link href={ROUTES.GOVERNMENT_AND_PUBLIC_SECTOR}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/government.png" alt='Government & Public Sector Research in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_govsec_h')}</h6>
                        <p className='caption mt-3'>{t('indust_govsec_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Fmcg */}
            <div className="col-span-12 md:col-span-6 lg:-mt-16">
                <Link href={ROUTES.FMCG}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/fmcg.png" alt='FMCG Research & Market Trends in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_fmcg_h')}</h6>
                        <p className='caption mt-3'>{t('indust_fmcg_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Food and Beverage */}
            <div className="col-span-12 md:col-span-6 lg:mt-20">
                <Link href={ROUTES.FOOD_AND_BEVERAGE}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/food.png" alt='Food & Beverage Industry Insights in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_food_h')}</h6>
                        <p className='caption mt-3'>{t('indust_food_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Real Estate */}
            <div className="col-span-12 md:col-span-6 lg:-mt-16">
                <Link href={ROUTES.REAL_ESTATE}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/real-state.png" alt='Real Estate Market Analysis & Trends in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_realestate_h')}</h6>
                        <p className='caption mt-3'>{t('indust_realestate_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Industrial and Manufacturing */}
            <div className="col-span-12 md:col-span-6 lg:mt-20">
                <Link href={ROUTES.INDUSTRIAL_AND_MANUFACTURING}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/industry.png" alt='Industrial & Manufacturing Research in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_industrial_h')}</h6>
                        <p className='caption mt-3'>{t('indust_industrial_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Consultant and Agencies */}
            <div className="col-span-12 md:col-span-6 lg:-mt-16">
                <Link href={ROUTES.CONSULTANT_AND_AGENCIES}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/consultant.png" alt='Market Research Solutions for Consultants & Agencies in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_consultant_h')}</h6>
                        <p className='caption mt-3'>{t('indust_consultant_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Other */}
            <div className="col-span-12 md:col-span-6 lg:mt-20">
                <Link href={ROUTES.OTHER}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/other.png" alt='Research for Various Industries in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_other_h')}</h6>
                        <p className='caption mt-3'>{t('indust_other_b').substring(0, 250)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>

            {/* Technology and Telecom */}
            <div className="col-span-12 md:col-span-6 lg:-mt-16">
                <Link href={ROUTES.TECHNOLOGY_AND_TELECOM}>
                    <div className='min-h-[335px] rounded-lg custom-border p-4 transform transition-transform duration-300 hover:translate-y-[-15px]'>
                        <img className='w-[50px] h-[50px]' src="./images/technology.png" alt='Tech & Telecom Market Research in Saudi Arabia' />
                        <h6 className='sub-heading text-green mt-3'>{t('indust_tech_h')}</h6>
                        <p className='caption mt-3'>{t('indust_tech_b').substring(0, 190)}...</p>
                        <button className='underline text-sm lg:text-lg font-semibold mt-2'>
                            {t('learn_more')}
                        </button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default IndustriesCard
import { useTranslations } from 'next-intl';
import React from 'react'
import CustomImage from '../common/CustomImage';

const ServicesBox = () => {
    const t = useTranslations('Common');

    return (
        <>
            {/* Column 1 */}
            <div className="col-span-6 lg:col-span-3">
                <div className='text-center'>
                    <h6 className='sub-heading text-green'>{t('our_services_s1_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s1_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s1_t2')}</li>
                    </ul>

                    <div className='flex flex-col items-center mt-3'>
                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/up-arrow.png'}
                                darksrc={'./images/up-arrow-dark.png'}
                                alt='Automotive market research services provider in Saudi Arabia'
                            />
                        </div>

                        <div className="service-circle mt-3">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-7.png'} alt='Automotive market research services provider in Saudi Arabia' />
                        </div>
                    </div>
                </div>

                <div className='text-center mt-8'>
                    <h6 className='sub-heading text-green'>{t('our_services_s5_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s5_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s5_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s5_t3')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s5_t4')}</li>
                    </ul>

                    <div className='flex flex-col items-center mt-4'>
                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/up-arrow.png'}
                                darksrc={'./images/up-arrow-dark.png'}
                                alt="Market analysis and consulting for fast-moving consumer goods"
                            />
                        </div>

                        <div className="service-circle mt-4">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-4.png'} alt='Government and public sector market research and consulting services provider in Saudi Arabia' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2 */}
            <div className='col-span-6 lg:col-span-3'>
                <div className='text-center'>
                    <div className='flex flex-col items-center mb-3'>
                        <div className="service-circle mb-3">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-1.png'} alt='FMCG market research and strategy services provider in Saudi Arabia' />
                        </div>

                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/down-arrow.png'}
                                darksrc={'./images/down-arrow-dark.png'}
                                alt="Custom market research services for Saudi Arabia’s automotive sector"
                            />
                        </div>
                    </div>

                    <h6 className='sub-heading text-green'>{t('indust_consultant_s1_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s2_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s2_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s2_t3')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s2_t4')}</li>
                    </ul>
                </div>

                <div className='text-center mt-8'>
                    <div className='flex flex-col items-center mb-4'>
                        <div className="service-circle mb-4">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-5.png'} alt='Food and beverage industry market research and insights services provider in Saudi Arabia' />
                        </div>

                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/down-arrow.png'}
                                darksrc={'./images/down-arrow-dark.png'}
                                alt="Detailed shopper research to boost retail performance."
                            />
                        </div>
                    </div>

                    <h6 className='sub-heading text-green'>{t('our_services_s6_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s6_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s6_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s6_t3')}</li>
                    </ul>
                </div>
            </div>

            {/* Column 3 */}
            <div className="col-span-6 lg:col-span-3">
                <div className='text-center'>
                    <h6 className='sub-heading text-green'>{t('our_services_s3_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s3_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s3_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s3_t3')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s3_t4')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s3_t5')}</li>
                    </ul>

                    <div className='flex flex-col items-center mt-3'>
                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/up-arrow.png'}
                                darksrc={'./images/up-arrow-dark.png'}
                                alt="Expert business strategy consulting for sustainable growth in Jeddah."
                            />
                        </div>

                        <div className="service-circle mt-3">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-2.png'} alt='Industrial manufacturing market research and consulting services provider in Saudi Arabia' />
                        </div>
                    </div>
                </div>

                <div className='text-center mt-8'>
                    <h6 className='sub-heading text-green'>{t('our_services_s7_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s7_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s7_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s7_t3')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s7_t4')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s7_t5')}</li>
                    </ul>

                    <div className='flex flex-col items-center mt-4'>
                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/up-arrow.png'}
                                darksrc={'./images/up-arrow-dark.png'}
                                alt="Innovative branding solutions to elevate your market presence." 
                            />
                        </div>

                        <div className="service-circle mt-4">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-6.png'} alt='Market research and insights services provider for consultants and agencies in Saudi Arabia' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 4 */}
            <div className='col-span-6 lg:col-span-3'>
                <div className='text-center'>
                    <div className='flex flex-col items-center mb-3'>
                        <div className="service-circle mb-3">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-10px]' src={'./images/service-3.png'} alt='Technology and telecom market research services provider in Saudi Arabia' />
                        </div>

                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/down-arrow.png'}
                                darksrc={'./images/down-arrow-dark.png'}
                                alt="Focal Point's modern office in Jeddah, Saudi Arabia."
                            />
                        </div>
                    </div>

                    <h6 className='sub-heading text-green'>{t('our_services_s4_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s4_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s4_t2')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s4_t3')}</li>
                    </ul>
                </div>

                <div className='text-center mt-8'>
                    <div className='flex flex-col items-center mb-4'>
                        <div className="service-circle mb-4">
                            <img className='w-[40px] h-[40px] transform transition-transform duration-300 hover:translate-y-[-5px]' src={'./images/service-8.png'} alt='Comprehensive market research and industry insights services provider in Saudi Arabia' />
                        </div>

                        <div className='flex justify-center'>
                            <CustomImage
                                className='h-20'
                                lightsrc={'./images/down-arrow.png'}
                                darksrc={'./images/down-arrow-dark.png'}
                                alt="Best Service provider in Saudia Arabia"
                            />
                        </div>
                    </div>

                    <h6 className='sub-heading text-green'>{t('our_services_s8_h')}</h6>
                    <ul className='list-disc list-inside mt-2'>
                        <li className='text-sm lg:text-base'>{t('our_services_s8_t1')}</li>
                        <li className='text-sm lg:text-base'>{t('our_services_s8_t2')}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServicesBox
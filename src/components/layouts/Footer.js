import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
    const t = useTranslations('Common');

    return (
        <footer className="max-w-section m-auto">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 mt-20 mb-4">
                    <div className='border-top !border-primary dark:!border-primary-dark'>
                        <div className='flex items-center justify-between mt-2'>
                            <span className=' text-xs'>
                                {t('footer_left')}
                            </span>

                            <span className=' text-xs'>
                                {t('footer_right')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
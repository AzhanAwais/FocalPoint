import React from 'react'
import CustomSlider from '../common/CustomSlider';
import { useTranslations } from 'next-intl';

const Partner = () => {
    const t = useTranslations('Common');

    return (
        <>
            <div className="col-span-12">
                <div className='text-center'>
                    <h2 className='text-2xl lg:text-5xl font-semibold'>
                        {t('clients_h')}
                    </h2>
                </div>
            </div>

            <div className="col-span-12 mt-12">
                <CustomSlider />
            </div>
        </>
    )
}

export default Partner
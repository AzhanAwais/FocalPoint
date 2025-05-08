'use client'
import React, { useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabsRender = ({ defaultValue, data }) => {
    const t = useTranslations('Common');
    const locale = useLocale();
    const tabRefs = useRef([]);
    const scrollContainerRef = useRef(null);
    const [activeTab, setActiveTab] = useState(t(defaultValue))

    const handleTabClick = (index) => {
        tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'end', block: 'nearest' });
    };

    return (
        <Tabs
            defaultValue={t(defaultValue)}
            value={activeTab}
            onValueChange={(val) => setActiveTab(val)}
        >
            <div ref={scrollContainerRef} className={`flex ${(locale == 'en' || !locale) ? 'flex-row' : 'flex-row-reverse'} overflow-x-auto py-8 hide-scrollbar`}>
                {
                    data?.map((item, index) => (
                        <TabsList key={index} className="bg-transparent ">
                            <TabsTrigger
                                className='tab-trigger'
                                value={item?.tabKey}
                                ref={(el) => (tabRefs.current[index] = el)}
                                onClick={() => handleTabClick(index)}
                            >
                                {item?.heading}
                            </TabsTrigger>
                        </TabsList>
                    ))
                }
            </div>

            <div className="flex justify-center gap-2 pb-6">
                {data.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(item.tabKey)
                            handleTabClick(index)
                        }}
                        aria-label={`Go to ${item.heading}`}
                        className={`h-2 w-2 rounded-full transition-colors ${activeTab === item.tabKey
                            ? '!bg-primary dark:!bg-primary-dark'
                            : '!bg-primary/30 dark:!bg-primary-dark/30'
                            }`}
                    ></button>
                ))}
            </div>

            {
                data?.map((item, index) => (
                    <TabsContent key={index} value={item?.tabKey}>
                        <div>
                            <h2 className='sub-heading '>{item?.heading}</h2>
                            <p className='sub-text mt-8'>{item?.content}</p>
                        </div>

                        <div className='mt-8'>
                            <h2 className='sub-heading '>{item?.helpHeading}</h2>
                            <div className="grid grid-cols-12 gap-4 mt-8" dir={locale == 'ar' ? 'rtl' : 'ltr'}>
                                {
                                    item?.helpImages?.map((dt, index) => (
                                        <div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
                                            <div className='help-box'>
                                                <img className='w-[80px] h-[80px]' src={dt?.imageUrl} alt={dt?.alt} />
                                                <h3 className='sub-heading mt-4 text-center !text-primary'>{dt?.heading}</h3>
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
    )
}

export default TabsRender
import { useTranslations } from 'next-intl';
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const FooterLink = () => {
    const t = useTranslations('Common');

    return (
        <>
            <div className="col-span-6 md:col-span-3">
                <div className='text-center'>
                    <span className='block text-sm lg:text-base'>{t("contact_add_h")}</span>
                    <span className='block text-sm lg:text-base'>{t("contact_add_b")}</span>
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <div className='text-center'>
                    <span className='block text-sm lg:text-base'>{t("contact_email_h")}</span>
                    <span className='block text-sm lg:text-base'>{t("contact_email")}</span>
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <div className='text-center'>
                    <span className='block text-sm lg:text-base'>{t("contact_phone_h")}</span>
                    <span className='block text-sm lg:text-base'>{t("contact_phone_number")}</span>
                </div>
            </div>

            <div className="col-span-6 md:col-span-3">
                <span className='block text-center'>{t("followus_h")}</span>

                <div className='flex items-center justify-center gap-3 h-full'>
                    <Link href={"https://www.instagram.com/focalpoint_ksa/"} target='_blank'>
                        <AiFillInstagram size={24} />
                    </Link>

                    <Link href={"https://twitter.com/FocalPoint_KSA/"} target='_blank'>
                        <FaXTwitter size={24} />
                    </Link>

                    <Link href={"https://www.facebook.com/focalpointksa/"}>
                        <FaFacebook size={24} />
                    </Link>

                    <Link href={"https://www.linkedin.com/company/focalpointksa/"}>
                        <FaLinkedin size={24} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FooterLink
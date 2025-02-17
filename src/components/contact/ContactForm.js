'use client'
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import moment from 'moment';
import emailjs from '@emailjs/browser';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/utils/firebase';

const ContactForm = () => {
    const t = useTranslations('Common');
    const { toast } = useToast()

    const [formData, setFormData] = useState({
        added_on: moment().format('dddd Do MMMM, hh:mm A'),
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const resetState = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const addContactUsDoc = async () => {
        try {
            await addDoc(collection(db, "ContactUs"), formData);
            // toast({
            //     // variant: "destructive",
            //     title: t('success_toast'),
            // })
        } catch (e) {
            toast({
                variant: "destructive",
                title: t('Failed to send message. Please try again later.'),
            })
        }
    };

    const sendEmail = async () => {
        const serviceID = 'service_glowjvd';
        const templateID = 'template_qaas5qg';
        const userID = '2nmb39WJ-AXevu9Xj';

        try {
            const emailParams = {
                'to_name': formData.first_name + ' ' + formData.last_name,
                'to_email': formData.email,
                'from_name': 'focal point',
                'user_message': formData.message,
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                toast({
                    // variant: "destructive",
                    title: t('success_toast'),
                })
                resetState();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: t('Failed to send message. Please try again later.'),
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendEmail()
        await addContactUsDoc()
    };

    return (
        <Form className='contact-form' onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                <Form.Group className="w-100 mb-4">
                    <Form.Label className="text-sm lg:text-base">{t('first_name')} *</Form.Label>
                    <Form.Control className="form-control"
                        required
                        type="text"
                        placeholder={t('first_name')}
                        name={'first_name'}
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="w-100 sm:ms-4 mb-4">
                    <Form.Label className="text-sm lg:text-base">{t('last_name')} *</Form.Label>
                    <Form.Control className="form-control"
                        required
                        type="text"
                        placeholder={t('last_name')}
                        name={'last_name'}
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </Form.Group>
            </div>

            <Form.Group className="mb-4">
                <Form.Label className="text-sm lg:text-base">{t('contact_email_h')} *</Form.Label>
                <Form.Control className="form-control"
                    required
                    type="email"
                    placeholder={t('contact_email_h')}
                    name={'email'}
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label className="text-sm lg:text-base">{t('contact_phone_h')} *</Form.Label>
                <Form.Control className="form-control"
                    required
                    type="text"
                    placeholder={t('contact_phone_h')}
                    name={'phone'}
                    value={formData.phone}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label className="text-sm lg:text-base">{t('message')}</Form.Label>
                <Form.Control
                    className="form-control resize-none"
                    as="textarea"
                    rows={4}
                    placeholder={t('message')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </Form.Group>

            <button type="submit" className='custom-btn btn-filled hover:animate-custom-pulse'>{t('submit')}</button>
        </Form>
    )
}

export default ContactForm
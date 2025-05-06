'use server';

import { cookies } from 'next/headers';
import { defaultLocale } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(COOKIE_NAME);
    return cookie?.value || defaultLocale;
}

export async function setUserLocale(locale) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, locale);
}
import React from 'react'
import CustomCarousel from './CustomCarousel';
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const revalidate = 120; 
export default async function Banner() {
    const bannersCollection = collection(db, "Banners");
    const bannersSnapshot = await getDocs(bannersCollection);
    const bannersList = bannersSnapshot?.docs?.map(doc => ({
        ...doc.data()
    }))?.filter((item) => item.status == true)?.sort((a, b) => a.position - b.position)

    return (
        <CustomCarousel banners={bannersList} />
    )
}
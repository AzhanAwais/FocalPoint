'use client'
import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react'

const TeamCard = () => {
    const locale = useLocale();
    const [team, setTeam] = useState([]);

    const fetchTeam = async () => {
        const teamCollection = collection(db, "TeamMember");
        const teamSnapshot = await getDocs(teamCollection);
        const clientList = teamSnapshot.docs.map(doc => ({
            ...doc.data()
        }))
            ?.filter(item => item.status == true)
            ?.sort((a, b) => {
                // Sort by team: "core" first, then "sme"
                if (a.team === "core" && b.team === "sme") return -1;
                if (a.team === "sme" && b.team === "core") return 1;
                // If team is the same, sort by position
                return a.position - b.position;
            });
        setTeam(clientList);
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    return (
        <>
            {
                team?.map((item, index) => (
                    <div key={index} className="transform transition-transform duration-300 hover:translate-y-[-10px] col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2">
                        <img className='w-full' src={item?.profile_photo} />

                        <h6 className='mt-3 sub-heading'>
                            {
                                locale == 'en' ?
                                    item?.name_l?.en
                                    :
                                    item?.name_l?.ar
                            }
                        </h6>
                        <small className='text-[#9D87AE] font-semibold sub-text'>
                            {
                                locale == 'en' ?
                                    item?.job_title_l?.en
                                    :
                                    item?.job_title_l?.ar
                            }
                        </small>
                    </div>
                ))
            }
        </>
    )
}

export default TeamCard
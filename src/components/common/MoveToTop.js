'use client'
import React, { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

const MoveToTop = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Set to true after the component is mounted on the client
    }, []);

    const scrollToTop = () => {
        if (isClient) {
            window.scrollTo(0, 0);  // Now you can safely use window
        }
    };

    if (!isClient) {
        return null; // Optionally render nothing until the client-side is available
    }

    return (
        <button className='move-to-top' onClick={scrollToTop}>
            <FaChevronUp className='text-primary-dark dark:text-primary' />
        </button>
    );
}

export default MoveToTop;

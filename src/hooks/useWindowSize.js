// hooks/useWindowSize.ts
import { useEffect, useState } from 'react';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Set size on mount
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

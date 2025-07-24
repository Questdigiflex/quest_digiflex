import { useState, useEffect } from 'react';

export default function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState({
        isMobile: false,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkBreakpoint = () => {
            const width = window.innerWidth;

            setBreakpoint({
                isMobile: width <= 480,
                isTablet: width >= 481 && width <= 768,
                isLaptop: width >= 769 && width <= 1275,
                isDesktop: width >= 1276,
            });
        };

        checkBreakpoint();

        window.addEventListener('resize', checkBreakpoint);

        return () => {
            window.removeEventListener('resize', checkBreakpoint);
        };
    }, []);

    return breakpoint;
}

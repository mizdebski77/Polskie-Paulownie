import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedTileWrapper } from './styledOffer';

interface AnimatedTileProps {
    children: React.ReactNode;
}



const AnimatedTile: React.FC<AnimatedTileProps> = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    function calculateRootMargin() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return '0px 0px -20% 0px';
        } else {
            return '0px 0px -30% 0px';
        }
    };

    return (
        <AnimatedTileWrapper ref={ref} className={inView ? 'visible' : ''}>
            {children}
        </AnimatedTileWrapper>
    );
};

export default AnimatedTile;

// useInViewConfig.js
import { useInView } from 'react-intersection-observer';

export function calculateRootMargin() {
    return '0px 0px -10% 0px';
};

export function useInViewAnimation() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: calculateRootMargin(),
    });

    return [ref, inView] as const; 
};
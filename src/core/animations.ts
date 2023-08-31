import { keyframes } from "styled-components";


export const slideBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(30%);
    } to {
        opacity: 1;
        transform: translateY(0%);
    }
`;

export const slideLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30%);
    } to {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const slideRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(30%);
    } to {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const opacitySlide = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const buttonsAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(-60%);
    } to {
        opacity: 1;
        transform: translateX(0%);
    }
`;

export const openImage = {
    opacity: 1,
    scale: 1
};

export const closeImage = {
    opacity: 0,
    scale: 0
};

export const openWrapper = {
    opacity: 1,
};

export const closeWrapper = {
    opacity: 0,
};

export const MobileNavAnimation = {
    visible: {
        height: 280,
        opacity: 1,
        transition: {
            x: { velocity: 100 },
            duration: 0.3,
        }
    },
  
    hidden: {
        height: 24,
        opacity: 0,
        transition: {
            x: { velocity: 100 },
            duration: 0.3,
            delay: 0.2
        }
    }
  };
  
  
  export const MobileLinksWrapperAnimation = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
  };
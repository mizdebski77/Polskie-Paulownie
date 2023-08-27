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
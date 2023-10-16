import { styled } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 48px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 32px;
    };
`;

export const CalcSection = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: flex;
        flex-direction: column-reverse;
    };
`;

export const InputsWrapper = styled.form`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 40px;
    padding: 52px 40px;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 40px 10px;
        gap: 20px;
    };

`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 800px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 10px;
    };
`;

export const Caption = styled.span`
    font-size: 24px;
    color: ${({ theme }) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 16px;
`;

export const Input = styled.input`
    padding: 8px;
    font-size: 20px;
    max-width: 800px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        padding: 8px;
    };
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
`;

export const ClearButton = styled.button`
    padding: 10px 64px;
    margin: 0 auto;
    font-size: 20px;
    cursor: pointer;
    background: ${({ theme }) => theme.color.secondColor};
    color: white;
    border: none;
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
    };

    &:disabled {
        background: gray;
        &:hover {
        transform: scale(1);
        cursor: no-drop;
    };

    }
`;

export const CountButton = styled.button`
    padding: 10px 64px;
    margin: 0 auto;
    font-size: 20px;
    cursor: pointer;
    background: ${({ theme }) => theme.color.secondColor};
    color: white;
    border: none;
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.02);
    };
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        padding: 10px 40px;
    };
`;

export const ResultWrapper = styled.div`
    text-align: center;
    font-size: 32px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const Result = styled.span`
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: bold;
`;

export const Image = styled.img`
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
`;
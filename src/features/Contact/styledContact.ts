import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1720px;
    margin: 0 auto;
    padding: 40px;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    color: ${({theme}) => theme.color.secondColor};
    margin-bottom: 0px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const Span = styled.h2`
    text-align: center;
    font-size: 48px;
    margin: 10px;
    font-weight: normal;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-top: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        grid-template-columns: 1fr;
    };
`;

export const Form = styled.form`
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    padding: 64px 40px;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;


export const InputWrapper = styled.div`
    display: grid;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        gap: 28px;
    };
`;

export const Inputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const Input = styled.input`
    background: white;
    border: none;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid black;
    font-size: 18px;
`;

export const Select = styled.select`
    background: transparent;
    border: none;
    padding: 10px;
    border-bottom: 2px solid ${({theme}) => theme.color.secondColor};
`;

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    font-size: 18px;
    margin: 20px 0 20px;
    background: transparent;
    padding: 12px;
    min-height: 140px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
`;

export const Button = styled.button`
    padding: 10px;
    max-width: 200px;
    width: 100%;
    font-size: 20px;
    color: ${({theme}) => theme.color.mainColor};
    background: ${({theme}) => theme.color.secondColor};
    border-radius: 10px;
    float:right ;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        max-width: 160px;
    };

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px ${({theme}) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
    };
    }
`;

export const LinkContainer = styled.div`
    box-shadow: 0px 0px 22px -3px rgba(16, 136, 0, 0.50);
    border-radius: 10px;
`;

export const LinksWrapper = styled.div`
    display: grid;
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 10px;
    }
`;

export const LinksTitle = styled.h4`
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: ${({theme}) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const TextField = styled.div`
    border-bottom: 2px solid ${({theme}) => theme.color.secondColor};
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        gap: 10px;
    };
`;
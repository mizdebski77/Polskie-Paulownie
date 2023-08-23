import { styled } from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    max-width: 1720px;
    margin: 0 auto;
    padding: 10px;
`;

export const Title = styled.header`
    font-size: 48px;
    margin-top: 40px;
    font-weight: 600 ;
    text-align: center;
    color: ${({ theme }) => theme.color.secondColor};
`;
import React from 'react';
import { ServicesImage, ServicesText, ServicesTextWrapper, ServicesTitle, Wrapper } from './styledServices';
import ex from '../../../../common/Images/Example/tree.png';

export const Services = () => {
    return (
        <Wrapper>

            <ServicesTextWrapper>
                <ServicesTitle>Lorem Ipsum</ServicesTitle>
                <ServicesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias perspiciatis ducimus aperiam ad libero nostrum, aliquam molestiae tempore reprehenderit id impedit, corporis assumenda! Libero optio iusto aspernatur vero pariatur.</ServicesText>
            </ServicesTextWrapper>
            <ServicesImage src={ex} />

            <ServicesImage src={ex} />
            <ServicesTextWrapper>
                <ServicesTitle>Lorem Ipsum</ServicesTitle>
                <ServicesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias perspiciatis ducimus aperiam ad libero nostrum, aliquam molestiae tempore reprehenderit id impedit, corporis assumenda! Libero optio iusto aspernatur vero pariatur.</ServicesText>
            </ServicesTextWrapper>
        </Wrapper>
    );
};


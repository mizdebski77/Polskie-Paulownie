import React from 'react';
import { ContentWrapper, ServicesImage, ServicesText, ServicesTextWrapper, ServicesTitle, Wrapper } from './styledServices';
import firstImg from './3.jpg'
import scndImg from './4.jpg'
import AnimatedElement from '../AnimatedElements';

export const Services = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <AnimatedElement left >
                    <ServicesImage src={firstImg} />
                </AnimatedElement>

                <AnimatedElement>
                    <ServicesTextWrapper>
                        <ServicesTitle>Lorem Ipsum</ServicesTitle>
                        <ServicesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias perspiciatis ducimus aperiam ad libero nostrum, aliquam molestiae tempore reprehenderit id impedit, corporis assumenda! Libero optio iusto aspernatur vero pariatur.</ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

            </ContentWrapper>

            <ContentWrapper reverse>
                <AnimatedElement left >
                    <ServicesTextWrapper>
                        <ServicesTitle>Lorem Ipsum</ServicesTitle>
                        <ServicesText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias perspiciatis ducimus aperiam ad libero nostrum, aliquam molestiae tempore reprehenderit id impedit, corporis assumenda! Libero optio iusto aspernatur vero pariatur.</ServicesText>
                    </ServicesTextWrapper>
                </AnimatedElement>

                <AnimatedElement>
                    <ServicesImage src={scndImg} />
                </AnimatedElement>
            </ContentWrapper>
        </Wrapper>
    );
};


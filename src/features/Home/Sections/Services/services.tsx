import React from 'react';
import { ContentWrapper, ServicesImage, ServicesText, ServicesTextWrapper, ServicesTitle, Wrapper } from './styledServices';
import ex from '../../../../common/Images/Example/tree.png';
import AnimatedElement from '../AnimatedElements';

export const Services = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <AnimatedElement left >
                    <ServicesImage src={ex} />
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
                    <ServicesImage src={ex} />
                </AnimatedElement>
            </ContentWrapper>
        </Wrapper>
    );
};


import React from 'react';
import { AboutImage, AboutText, AboutTextWrapper, AboutTitle, ContentWrapper, Wrapper } from './styledAbout';
import firstImg from './1.jpg'
import scndImg from './2.jpg'
import AnimatedElement from '../AnimatedElements';

export const About = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <AboutTextWrapper>
                    <AboutTitle>Lorem Ipsum</AboutTitle>
                    <AboutText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime repellendus rem fugit consequatur recusandae porro ipsa itaque esse, non repellat necessitatibus pariatur dolores cupiditate molestiae voluptas neque repudiandae officia.</AboutText>
                </AboutTextWrapper>
                <AboutImage src={firstImg} />
            </ContentWrapper>

            <ContentWrapper reverse>
                <AnimatedElement left>
                    <AboutImage src={scndImg} />
                </AnimatedElement>
                <AnimatedElement>
                    <AboutTextWrapper>
                        <AboutTitle>Lorem Ipsum</AboutTitle>
                        <AboutText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime repellendus rem fugit consequatur recusandae porro ipsa itaque esse, non repellat necessitatibus pariatur dolores cupiditate molestiae voluptas neque repudiandae officia.</AboutText>
                    </AboutTextWrapper>
                </AnimatedElement>
            </ContentWrapper>

        </Wrapper>
    );
};


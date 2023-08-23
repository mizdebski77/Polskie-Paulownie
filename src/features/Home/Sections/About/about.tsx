import React from 'react';
import { AboutImage, AboutText, AboutTextWrapper, AboutTitle, Wrapper } from './styledAbout';
import ex from '../../../../common/Images/Example/pinkex.png'
export const About = () => {
    return (
        <Wrapper>
            <AboutTextWrapper>
                <AboutTitle>Lorem Ipsum</AboutTitle>
                <AboutText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime repellendus rem fugit consequatur recusandae porro ipsa itaque esse, non repellat necessitatibus pariatur dolores cupiditate molestiae voluptas neque repudiandae officia.</AboutText>
            </AboutTextWrapper>
            <AboutImage src={ex} />

            <AboutImage src={ex} />
            <AboutTextWrapper>
                <AboutTitle>Lorem Ipsum</AboutTitle>
                <AboutText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maxime repellendus rem fugit consequatur recusandae porro ipsa itaque esse, non repellat necessitatibus pariatur dolores cupiditate molestiae voluptas neque repudiandae officia.</AboutText>
            </AboutTextWrapper>
        </Wrapper>
    );
};


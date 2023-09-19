import React from 'react';
import { AboutText, Content, Header, HeaderTitle, Image, TextWrapper, Title, Wrapper } from './styledAbout';
import circleImage from './aboutImage.png';

export const About = () => {
    return (
        <Wrapper>
            <Header>
                <HeaderTitle>O nas</HeaderTitle>
            </Header>

            <Content>
                <Image src={circleImage} />

                <TextWrapper>
                    <Title>Polskie Paulownie</Title>
                    <AboutText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia, animi saepe suscipit cupiditate, eveniet quos fugiat unde magni nesciunt temporibus ut cum. Accusantium cum explicabo perferendis nam praesentium quidem!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia, animi saepe suscipit cupiditate, eveniet quos fugiat unde magni nesciunt temporibus ut cum. Accusantium cum explicabo perferendis nam praesentium quidem!

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia, animi saepe suscipit cupiditate, eveniet quos fugiat unde magni nesciunt temporibus ut cum. Accusantium cum explicabo perferendis nam praesentium quidem!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum officia, animi saepe suscipit cupiditate, eveniet quos fugiat unde magni nesciunt temporibus ut cum. Accusantium cum explicabo perferendis nam praesentium quidem!
                    </AboutText>
                </TextWrapper>
            </Content>

        </Wrapper>
    );
};


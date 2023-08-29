import React from 'react';
import { Button, ContactWrapper, Form, Input, InputWrapper, Inputs, Link, LinkContainer, LinksTitle, LinksWrapper, SVGIcon, Span, TextArea, TextField, Title, Wrapper } from './styledContact';
import facebook from '../../common/Images/SVG/facebook.svg';
import mail from '../../common/Images/SVG/mail.svg';
import phone from '../../common/Images/SVG/phone.svg';
import adress from '../../common/Images/SVG/location.svg';


export const Contact = () => {
    return (
        <Wrapper>
            <Title>Masz pytanie?</Title>
            <Span>Skontaktuj się z nami wypełniając formularz lub klikając w link</Span>

            <ContactWrapper>
                <Form>
                    <InputWrapper>
                        <Inputs>
                            <Input type='name' name="name" placeholder='Imię i nazwisko *' required />
                            <Input type='email' name="email" placeholder='E-Mail' required />
                        </Inputs>
                        <Input type='name' name="number" placeholder='Temat' />
                    </InputWrapper>
                    <TextArea placeholder='Wiadomość' name='message' required ></TextArea>
                    <Button>Wyślij</Button>
                </Form>

                <LinkContainer>
                    <LinksTitle>Znajdziesz nas również</LinksTitle>
                    <LinksWrapper>
                        <TextField>
                            <SVGIcon src={phone} />
                            <Link>506504582</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={facebook} />
                            <Link>Polskie Paulownie</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={mail} />
                            <Link>polskiepaulowni@gmail.com</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={adress} />
                            <Link>Ul. Jakaś tam 32/62</Link>
                        </TextField>
                    </LinksWrapper>
                </LinkContainer>
            </ContactWrapper>
        </Wrapper>
    );
};


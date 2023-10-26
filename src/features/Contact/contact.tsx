import React, { useRef } from 'react';
import { Button, ContactWrapper, Form, Input, InputWrapper, Inputs, Link, LinkContainer, LinksTitle, LinksWrapper, SVGIcon, Span, TextArea, TextField, Title, Wrapper } from './styledContact';
import facebook from '../../common/Images/SVG/facebook.svg';
import mail from '../../common/Images/SVG/mail.svg';
import phone from '../../common/Images/SVG/phone.svg';
import adress from '../../common/Images/SVG/location.svg';
import { message } from 'antd';
import emailjs from '@emailjs/browser';


export const Contact = () => {

    const handleSendEmailSuccess = () => {
        message.success('E-mail was sent!');
    };

    const handleSendEmailError = () => {
        message.error('Email has not been sent. Try again!');
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;

        emailjs.sendForm('service_154k192', 'template_kxd3htt', formElement, 'NBviFIQJGm59n')

            .then((result) => {
                if (result.text === "OK") {
                    formElement.reset();
                    handleSendEmailSuccess();
                }
            })
            .catch(() => {
                handleSendEmailError();
            });
    };
    return (
        <Wrapper>
            <Title>Masz pytanie?</Title>
            <Span>Skontaktuj się z nami wypełniając formularz lub klikając w link</Span>

            <ContactWrapper>
                <Form
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <InputWrapper>
                        <Inputs>
                            <Input type='name' name="name" placeholder='Imię i nazwisko *' required />
                            <Input type='email' name="email" placeholder='E-Mail' required />
                        </Inputs>
                        <Input type='name' name="topic" placeholder='Temat' />
                    </InputWrapper>
                    <TextArea placeholder='Wiadomość' name='message' required ></TextArea>
                    <Button>Wyślij</Button>
                </Form>

                <LinkContainer>
                    <LinksTitle>Znajdziesz nas również</LinksTitle>
                    <LinksWrapper>
                        <TextField>
                            <SVGIcon src={phone} />
                            <Link href="tel:603554885"> 603 554 885</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={facebook} />
                            <Link href='https://www.facebook.com/profile.php?id=100067548942538' target='blank'>Polskie Paulownie</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={mail} />
                            <Link href="mailto: polskie.paulownie@gmail.com" >polskiepaulowni@gmail.com</Link>
                        </TextField>
                        <TextField>
                            <SVGIcon src={adress} />
                            <Link target='blank' href='https://www.google.com/maps/place/Kolejowa+105,+43-178+Ornontowice,+Polska/@50.190847,18.762246,13z/data=!4m6!3m5!1s0x4711351f2697d1eb:0x28170e0e39f5a940!8m2!3d50.1908466!4d18.7622456!16s%2Fg%2F11c1z68rz6?hl=pl-PL&entry=ttu'>Ul. Kolejowa 105 Ornontowice</Link>
                        </TextField>
                    </LinksWrapper>
                </LinkContainer>
            </ContactWrapper>
        </Wrapper>
    );
};


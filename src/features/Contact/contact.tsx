import React from 'react';
import { Button, ContactWrapper, Form, Input, InputWrapper, Inputs, LinkContainer, LinksTitle, LinksWrapper, Span, TextArea, TextField, Title, Wrapper } from './styledContact';

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
                            Telefon
                        </TextField>
                        <TextField>
                            Mail
                        </TextField>
                        <TextField>
                            Facebook
                        </TextField>
                        <TextField>
                            Adress
                        </TextField>
                    </LinksWrapper>
                </LinkContainer>
            </ContactWrapper>
        </Wrapper>
    );
};


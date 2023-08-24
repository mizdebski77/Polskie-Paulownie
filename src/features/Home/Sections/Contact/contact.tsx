import React from 'react';
import { ContactButton, ContactItemWrapper, ContactLink, ContactTitle, ContactWrapper, Span, Wrapper } from './styledContact';

export const Contact = () => {
    return (
        <Wrapper>
            <ContactWrapper>
                <ContactItemWrapper>
                    <ContactLink to="/Kontakt">
                        <ContactButton>Wypełnij formularz kontaktowy</ContactButton>
                    </ContactLink>
                </ContactItemWrapper>
                <Span>lub</Span>
                <ContactItemWrapper>
                    <ContactTitle>Skontaktuj się z nami</ContactTitle>
                   
                </ContactItemWrapper>
            </ContactWrapper>
        </Wrapper>
    );
};


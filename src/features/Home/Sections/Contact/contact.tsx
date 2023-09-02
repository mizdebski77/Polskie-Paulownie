import React from 'react';
import { ContactButton, ContactItemWrapper, ContactLink, ContactSvgWrapper, ContactTitle, ContactWrapper, SVGIcon, SVGLink, Span, Wrapper } from './styledContact';
import facebook from '../../../../common/Images/SVG/facebook.svg'
import phone from '../../../../common/Images/SVG/phone.svg'
import mail from '../../../../common/Images/SVG/mail.svg'

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
                    <ContactSvgWrapper>
                        <SVGLink href='https://www.facebook.com/profile.php?id=100067548942538' target='blank' >
                            <SVGIcon src={facebook} />
                        </SVGLink>
                        <SVGLink href="mailto: zbigniew.machulik@gmail.com">
                            <SVGIcon src={mail} />
                        </SVGLink>
                        <SVGLink href="tel:603554885">
                            <SVGIcon src={phone} />
                        </SVGLink>
                    </ContactSvgWrapper>
                </ContactItemWrapper>
            </ContactWrapper>
        </Wrapper>
    );
};

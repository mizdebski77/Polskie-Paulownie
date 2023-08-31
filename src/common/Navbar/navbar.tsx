import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneLinksWrapper, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import logo from '../Images/Navabr.png';

export const Navbar = () => {
    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);

    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const closePhoneNavbar = () => {
        setPhoneNavbar(false);
    };

    const onLinkClick = () => {
        togglePhoneNavbar(); 
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Wrapper>
                <LogoLink to="/Strona-Główna">
                    <Logo src={logo} alt='Logo' />Polskie Paulownie
                </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>
                <PhoneNavbar onClick={togglePhoneNavbar}>
                    <Hamburger color='#0F7701' size={28} toggled={phoneNavbar} />
                </PhoneNavbar>
            </Wrapper>

            {phoneNavbar && (
                <PhoneNavbarWrapper>
                    <PhoneLinksWrapper>
                        {links.map((link, index) => (
                            <Links
                                key={index}
                                to={link.link}
                                onClick={() => {
                                    onLinkClick();
                                    closePhoneNavbar(); 
                                }}
                            >
                                {link.text}
                            </Links>
                        ))}
                    </PhoneLinksWrapper>
                </PhoneNavbarWrapper>
            )}
        </>
    );
};

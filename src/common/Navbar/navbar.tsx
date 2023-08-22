import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneLinksWrapper, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import logo from '../Images/Navabr.png'

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };


    return (
        <>
            <Wrapper>
                <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo' />Polskie Paulownie </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link} onClick={() => window.scrollTo(0, 0)}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>
                <PhoneNavbar onClick={openPhoneNavbar}>
                    <Hamburger color='#0F7701' size={28} />
                </PhoneNavbar>
            </Wrapper>

            {phoneNavbar && (
                <PhoneNavbarWrapper>
                    <PhoneLinksWrapper>
                        {links.map((link, index) => (
                            <Links
                                key={index} to={link.link} onClick={() => window.scrollTo(0, 0)}
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


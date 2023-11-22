import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneLinksWrapper, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import logo from '../Images/Navabr.png';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileNavAnimation } from '../../core/animations';

export const Navbar = () => {
    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);

    const [navbarBorder, setNavbarBorder] = useState(false);

    const adBorder = () => {
        if (window.scrollY >= 100) {
            setNavbarBorder(true);
        } else {
            setNavbarBorder(false);
        };
    };

    window.addEventListener("scroll", adBorder, { passive: true });


    const togglePhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const onLinkClick = () => {
        togglePhoneNavbar();
        window.scrollTo(0, 0);
    };



    return (
        <>
            <Wrapper scrolled={navbarBorder}>
                <LogoLink to="/Strona-Główna">
                    <Logo src={logo} alt='Logo' />Polskie Paulownie
                </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link} onClick={() => window.scrollTo(0, 0)}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>
                <PhoneNavbar onClick={togglePhoneNavbar}>
                    <Hamburger color='#0F7701' size={28} toggled={phoneNavbar} />
                </PhoneNavbar>
            </Wrapper>

            <AnimatePresence>
                    <PhoneNavbarWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={phoneNavbar ? "visible" : "hidden"}
                        exit="hidden"
                        variants={mobileNavAnimation}
                    >
                        <PhoneLinksWrapper>
                            {links.map((link, index) => (
                                <Links
                                    key={index}
                                    to={link.link}
                                    onClick={() => {
                                        onLinkClick();
                                        window.scrollTo(0, 0)
                                    }}
                                >
                                    {link.text}
                                </Links>
                            ))}
                        </PhoneLinksWrapper>
                    </PhoneNavbarWrapper>
            </AnimatePresence>
        </>
    );
};

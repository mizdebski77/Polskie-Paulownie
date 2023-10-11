import { ContactElement, ContactWrapper, FooterTitle, Image, Logo, LogoLink, SVGLink, SVGLinks, Socials, Wrapper } from './styledFooter';
import logo from './Logo-paulownie.png';
import phone from '../Images/WhiteSVG/phone.svg';
import mail from '../Images/WhiteSVG/mail.svg';
import facebook from '../Images/WhiteSVG/facebook.svg';
export const Footer = () => {


    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper >
            <LogoLink to="./Strona-Główna" onClick={handleClick}>
                <Logo src={logo} />
            </LogoLink>
            <ContactWrapper>
                <FooterTitle>Polskie Paulownie</FooterTitle>
                <ContactElement>Adres: ul. Kolejowa 105 43-178 Ornontowice</ContactElement>
                <ContactElement>Telefon 1: 603 554 885</ContactElement>
                <ContactElement>Telefon 2: 787 989 631</ContactElement>
                <ContactElement>E-Mail: zbigniew.machulik@gmail.com </ContactElement>
            </ContactWrapper>

            <Socials>
                <FooterTitle> Skontaktuj się z nami:</FooterTitle>
                <SVGLinks>
                    <SVGLink href='https://www.facebook.com/profile.php?id=100067548942538' target='blank'><Image src={facebook} /></SVGLink>
                    <SVGLink href="mailto: zbigniew.machulik@gmail.com"><Image src={mail} /></SVGLink>
                    <SVGLink href="tel:603554885"><Image src={phone} /></SVGLink>
                </SVGLinks>
            </Socials>
        </Wrapper>
    );
};

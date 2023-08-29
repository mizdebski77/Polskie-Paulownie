import { ContactElement, ContactWrapper, FooterTitle, Image, Logo, LogoLink, SVGLink, SVGLinks, Socials, Wrapper } from './styledFooter';
import logo from '../Images/Logo-paulownie.png';
import phone from '../Images/WhiteSVG/phone.svg';
import mail from '../Images/WhiteSVG/mail.svg';
import facebook from '../Images/WhiteSVG/facebook.svg';
export const Footer = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <LogoLink to="./Strona-Główna" onClick={handleClick}>
                <Logo src={logo} />
            </LogoLink>
            <ContactWrapper>
                <FooterTitle>Polskie Paulownie S.A:</FooterTitle>
                <ContactElement>Adres: Jakaś tam</ContactElement>
                <ContactElement>Telefon: 615236616</ContactElement>
                <ContactElement>Nip: 81528153</ContactElement>
            </ContactWrapper>

            <Socials>
                <FooterTitle> Skontaktuj się z nami:</FooterTitle>
                <SVGLinks>
                    <SVGLink><Image src={phone} /></SVGLink>
                    <SVGLink><Image src={mail} /></SVGLink>
                    <SVGLink><Image src={facebook} /></SVGLink>
                </SVGLinks>
            </Socials>
        </Wrapper>
    );
};

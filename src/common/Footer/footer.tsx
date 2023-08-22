import { ContactElement, ContactWrapper, FooterTitle,  Logo, LogoLink, SVGLink, SVGLinks, Socials, Wrapper } from './styledFooter';
import logo from '../Images/Logo-paulownie.png';

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
                <ContactElement>Adres: Legionów Polskich 34</ContactElement>
                <ContactElement>Telefon: 501375604</ContactElement>
                <ContactElement>Nip: 534645234</ContactElement>
            </ContactWrapper>

            <Socials>
                <FooterTitle> Skontaktuj się z nami:</FooterTitle>
                <SVGLinks>
                    {/* <SVGLink><Image src={insta} /></SVGLink>
                    <SVGLink><Image src={website} /> </SVGLink>
                    <SVGLink><Image src={mail} /></SVGLink>
                    <SVGLink><Image src={fb} /></SVGLink> */}
                </SVGLinks>
            </Socials>
        </Wrapper>
    );
};

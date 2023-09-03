import React, { useState } from 'react';
import ex1 from '../../../../common/Images/Example/header1.jpg'
import ex2 from '../../../../common/Images/Example/header2.jpg'
import { Button, CloseButton, CustomSlide, CustomSwiper, FullScreenImage, FullScreenWrapper, GalleryImage, GalleryLink, ImagesWrapper, Pics, Wrapper } from './styledGallery';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { closeImage, closeWrapper, openImage, openWrapper } from '../../../../core/animations';
import AnimatedElement from '../AnimatedElements';

export const Gallery = () => {

    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullScreenSrc, setFullScreenSrc] = useState<string>("");


    const data = [
        { id: 1, imgsrc: ex1 },
        { id: 2, imgsrc: ex2 },
        { id: 7, imgsrc: ex2 },
        { id: 8, imgsrc: ex1 },
        { id: 9, imgsrc: ex2 },
        { id: 10, imgsrc: ex1 },
        { id: 13, imgsrc: ex2 },
        { id: 14, imgsrc: ex1 },
        { id: 15, imgsrc: ex2 },
        { id: 16, imgsrc: ex1 },
        { id: 19, imgsrc: ex2 }
    ];

    const openFullScreen = (src: string) => {
        setFullScreenSrc(src);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
        setFullScreenSrc("");
    };
    return (
        <>

            <Wrapper>
                <AnimatedElement gallery>
                    <ImagesWrapper>
                        {data.map((img) => (
                            <Pics key={img.id}>
                                <GalleryImage src={img.imgsrc} onClick={() => openFullScreen(img.imgsrc)} />
                            </Pics>
                        ))}
                    </ImagesWrapper>
                </AnimatedElement>

                <AnimatedElement>
                    <GalleryLink to="/Galeria" onClick={() => window.scrollTo(0, 0)}>
                        <Button>Sprawdź wszystie nasze zdjęcia</Button>
                    </GalleryLink>
                </AnimatedElement>

            </Wrapper>

            {fullScreenSrc && (
                <FullScreenWrapper
                    as={motion.div}
                    initial={closeWrapper}
                    animate={fullScreen ? openWrapper : closeWrapper}
                    transition={{ duration: 0.5 }}
                >
                    <CustomSwiper<React.ComponentType<any>>
                        centeredSlides={true}
                        slidesPerView={1}
                        modules={[Navigation]}
                        spaceBetween={100}
                        loop={false}
                        navigation
                        grabCursor={true}
                        initialSlide={data.findIndex((img) => img.imgsrc === fullScreenSrc)}

                    >
                        {data.map((img) => (
                            <CustomSlide key={img.id}>
                                <FullScreenImage
                                    src={img.imgsrc}
                                    as={motion.img}
                                    initial={closeImage}
                                    animate={fullScreen ? openImage : closeImage}
                                    transition={{ duration: 0.5 }}
                                />
                            </CustomSlide>))}

                    </CustomSwiper>
                    <CloseButton
                        onClick={() => closeFullScreen()}>
                        <AiOutlineClose size={35} />
                    </CloseButton>
                </FullScreenWrapper>)}
        </>
    );
};


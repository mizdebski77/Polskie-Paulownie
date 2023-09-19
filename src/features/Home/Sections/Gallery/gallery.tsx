import React, { useState } from 'react';

import img1 from '../../../../common/Images/home/rolka/ROLKA_1.jpg';
import img2 from '../../../../common/Images/home/rolka/ROLKA_3.jpg';
import img4 from '../../../../common/Images/home/rolka/ROLKA_4.jpg';
import img5 from '../../../../common/Images/home/rolka/ROLKA_5.jpg';
import img6 from '../../../../common/Images/home/rolka/ROLKA_6.jpg';
import img3 from '../../../../common/Images/home/rolka/ROLKA_7.jpg';

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
        { id: 1, imgsrc: img1 },
        { id: 2, imgsrc: img2 },
        { id: 7, imgsrc: img3 },
        { id: 8, imgsrc: img4 },
        { id: 9, imgsrc: img5 },
        { id: 10, imgsrc: img6 },
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


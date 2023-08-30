import React, { useState } from 'react';
import ex1 from '../../common/Images/Example/ex1.jpg';
import ex2 from '../../common/Images/Example/ex2.jpg';
import ex3 from '../../common/Images/Example/ex3.jpg';
import { CloseButton, CustomSlide, CustomSwiper, FullScreenImage, FullScreenWrapper, GalleryWrapper, Image, Header, Pics, Wrapper, HeaderTitle } from './styledGallery';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { closeImage, closeWrapper, openImage, openWrapper } from '../../core/animations';

export const Gallery = () => {

    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullScreenSrc, setFullScreenSrc] = useState<string>("");


    const data = [
        { id: 1, imgsrc: ex1 },
        { id: 2, imgsrc: ex2 },
        { id: 3, imgsrc: ex3 },
        { id: 4, imgsrc: ex2 },
        { id: 5, imgsrc: ex2 },
        { id: 6, imgsrc: ex3 },
        { id: 7, imgsrc: ex2 },
        { id: 8, imgsrc: ex1 },
        { id: 9, imgsrc: ex2 },
        { id: 10, imgsrc: ex1 },
        { id: 11, imgsrc: ex3 },
        { id: 12, imgsrc: ex2 },
        { id: 13, imgsrc: ex2 },
        { id: 14, imgsrc: ex1 },
        { id: 15, imgsrc: ex2 },
        { id: 16, imgsrc: ex1 },
        { id: 17, imgsrc: ex3 },
        { id: 18, imgsrc: ex2 },
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
                <Header>
                    <HeaderTitle>Galeria zdjęć</HeaderTitle>
                </Header>
                <GalleryWrapper>
                    {data.map((img) => (
                        <Pics key={img.id}>
                            <Image src={img.imgsrc} onClick={() => openFullScreen(img.imgsrc)} />
                        </Pics>
                    ))}
                </GalleryWrapper>
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


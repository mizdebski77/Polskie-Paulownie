import React, { useState } from 'react';
import { CloseButton, CustomSlide, CustomSwiper, FullScreenImage, FullScreenWrapper, GalleryWrapper, Image, Header, Pics, Wrapper, HeaderTitle } from './styledGallery';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { closeImage, closeWrapper, openImage, openWrapper } from '../../core/animations';

declare const require: {
    context(path: string, recursive: boolean, regExp: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};


export const Gallery = () => {

    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullScreenSrc, setFullScreenSrc] = useState<string>("");

    const imagesFolder = require.context('../../common/Images/gallery', false, /\.(png|jpg|jpeg|gif|svg|ico|JPEG|JPG|jpeg)$/);
    const imageKeys = imagesFolder.keys();

    const openFullScreen = (src: string) => {
        setFullScreenSrc(src);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
        setFullScreenSrc("");
    };

    const handleImageContextMenu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
    };


    return (
        <>
            <Wrapper>
                <Header>
                    <HeaderTitle>Galeria zdjęć</HeaderTitle>
                </Header>
                <GalleryWrapper>
                    {imageKeys.map((imageKey) => (
                        <Pics key={imageKey} >
                            <Image
                                onContextMenu={handleImageContextMenu}
                                src={imagesFolder(imageKey) as string}
                                onClick={() => openFullScreen(imageKey)} />

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
                        initialSlide={imageKeys.findIndex((img) => img === fullScreenSrc)}

                    >
                        {imageKeys.map((imageKey) => (
                            <CustomSlide key={imageKey}>
                                <FullScreenImage
                                    onContextMenu={handleImageContextMenu}
                                    src={imagesFolder(imageKey) as string}
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

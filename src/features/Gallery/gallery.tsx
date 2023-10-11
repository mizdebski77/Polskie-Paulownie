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
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);


    const smallImagesFolder = require.context('./Thumbnails', true, /\.jpg$/);
    const largeImagesFolder = require.context('./Images', true, /\.jpg$/);
    const smallImageKeys = smallImagesFolder.keys();
    const largeImageKeys = largeImagesFolder.keys();

    const openFullScreen = (index: number) => {
        setCurrentImageIndex(index);
        setFullScreenSrc(largeImagesFolder(largeImageKeys[index]) as string);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
        setCurrentImageIndex(-1);
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
                    {smallImageKeys.map((imageKey, index) => (
                        <Pics key={imageKey} >
                            <Image
                                src={smallImagesFolder(imageKey) as string}
                                onClick={() => openFullScreen(index)} />
                        </Pics>
                    ))}
                </GalleryWrapper>
            </Wrapper>


            {fullScreen && (
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
                        initialSlide={currentImageIndex}
                    >
                        {largeImageKeys.map((imageKey) => (
                            <CustomSlide key={imageKey}>
                                <FullScreenImage
                                    onContextMenu={handleImageContextMenu}
                                    src={largeImagesFolder(imageKey) as string}
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

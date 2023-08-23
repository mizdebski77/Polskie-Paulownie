import React from 'react';
import ex1 from '../../../../common/Images/Example/ex1.jpg'
import ex2 from '../../../../common/Images/Example/ex2.jpg'
import { Button, GalleryImage, GalleryLink, ImagesWrapper, Wrapper } from './styledGallery';

export const Gallery = () => {
    return (
        <Wrapper>
            <ImagesWrapper>
                <GalleryImage src={ex1}/>
                <GalleryImage src={ex2}/>
                <GalleryImage src={ex1}/>
                <GalleryImage src={ex2}/>
                <GalleryImage src={ex1}/>
                <GalleryImage src={ex2}/>
            </ImagesWrapper>
            <GalleryLink to = "/Galeria">
                <Button>Sprawdź wszystie nasze zdjęcia</Button>
            </GalleryLink>
        </Wrapper>
    );
};


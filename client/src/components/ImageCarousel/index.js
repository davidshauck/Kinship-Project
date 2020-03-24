import React from 'react';
import Carousel from 'react-image-carousel';
import Crystal from "./crystal-countdown.png";
import Giftastic from "./giftastic.png";
import Trebek from "./trebek.jpeg"
// import Hangman from "./hangman.png"

function ImageCarousel() {
    let images = [
        Crystal,
        Giftastic,
        Player,
        Trebek,
        Hangman
    ];
 
    return (
        <div className="my-carousel">
            <Carousel 
                images={images} 
                thumb={true}
                loop={true}
                // autoplay={3000}
            />
        </div>
    )
}

export default ImageCarousel;
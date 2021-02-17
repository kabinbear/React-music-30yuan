import React, { useEffect, useState } from 'react'
import 'swiper/swiper-bundle.css'
import {SliderContainer} from './style'
import Swiper, { Pagination, Autoplay } from 'swiper'
Swiper.use([Pagination, Autoplay])
function Slider(props) {
    const [sliderSwiper, setsliderSwiper] = useState(null);
    const { bannerList } = props
    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper(".slider-container", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            });
            setsliderSwiper(newSliderSwiper);
        }
    }, [bannerList.length,sliderSwiper]);
    return (
        <SliderContainer>
         <div className="slider-container">
             <div className="swiper-wrapper">
                 {
                     bannerList.map(slider =>{
                         return (
                             <div className="swiper-slide" key={slider.imageUrl}>
                            <div className="slider-nav">
                                <img src={slider.imageUrl} width="100%" height="100%" alt="推薦"/>
                            </div>
                             </div>
                         )
                     })
                 }
             </div>
             <div className="swiper-pagination"></div>
         </div>
         <div className="before"></div>
        </SliderContainer>
    )
}

export default React.memo(Slider)
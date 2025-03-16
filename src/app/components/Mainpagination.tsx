"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules';


function Mainpagination() {
    return (
        <>
            <Swiper
                centeredSlides={true}
                effect='fade'
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[350px] md:h-[700px] w-full overflow-hidden">
                        <img
                            src="https://www.narliferibot.com/en-us/images/ferries/selimiye.jpg"
                            alt="Banner1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[350px] md:h-[700px] w-full overflow-hidden">
                        <img
                            src="https://negmar.com/wp-content/uploads/2023/02/Negmar-Cicek-3.jpeg"
                            alt="Banner2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[350px] md:h-[700px] w-full overflow-hidden">
                        <img
                            src="https://www.shipspotting.com/photos/big/9/2/8/3555829.jpg?cb=0"
                            alt="Banner3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[350px] md:h-[700px] w-full overflow-hidden">
                        <img
                            src="https://negmar.com/wp-content/uploads/2023/02/lpg-1.jpg"
                            alt="Banner4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center h-[350px] md:h-[700px] w-full overflow-hidden">
                        <img
                            src="https://negmar.com/wp-content/uploads/2023/03/hamidiye-6.jpg"
                            alt="Banner5"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Mainpagination
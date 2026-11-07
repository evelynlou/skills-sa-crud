import React from "react";
import './telaCarrossel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import s1 from './img/2.png'
import s2 from './img/3.png'
import s3 from './img/1.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from 'swiper/element/bundle'
register();


function TelaCarrossel() {

    const data = [
        { id: '1', image: s1 },
        { id: '2', image: s2 },
        { id: '3', image: s3 }
    ]

    return (
        <div className="TelaCarrossel-container">
            <Swiper
                sliderPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default TelaCarrossel
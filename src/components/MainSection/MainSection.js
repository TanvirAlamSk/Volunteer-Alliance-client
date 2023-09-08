import React from 'react';
import "./main.css"
import img1 from "../../assets/slider/1.jpg"
import img2 from "../../assets/slider/2.jpg"
import img3 from "../../assets/slider/3.jpg"

const MainSection = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full gradient-image'>
                    <img src={img1} className="w-full" alt='' />
                </div>
                <div className="absolute flex justify-between transform-y-0 -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div className='w-2/5 text-left' >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ducimus exercitationem nulla? Doloribus maiores repudiandae consectetur quidem animi, ea sint aspernatur quam numquam, eligendi perspiciatis, dolor sit omnis. Neque, quibusdam?</p>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
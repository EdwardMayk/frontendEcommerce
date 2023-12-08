'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
export function ProductComponent() {
    let title = "20% off en Teclados"
    let description = "Lorem ipsum dolor sit amet consec tetur adipisicing elit."
    return (
        <div className="w-60 h-80 rounded-lg m-2">
            <div className="z-10 absolute">
                <img src="/img/teclado.jpg" className="w-60 h-80 object-cover rounded-lg" />
            </div>
            <div className="flex items-end bg-black h-80 w-60 z-20 absolute opacity-50 text-white rounded-lg">
                <div className="flex flex-col p-4">
                    <div className="text-xl font-bold">
                        <p>{title}</p>
                    </div>
                    <div className="text-xs">
                        <p>{description}</p>
                    </div>
                    <div className="flex justify-center items-center bg-black dark:bg-white rounded-sm w-32 h-5 mt-3 text-xs text-white dark:text-black text-center font-bold">
                        <button>COMPRAR AHORA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Product2Component() {
    return (
        <div className="w-40 h-60 rounded-lg m-2">
            <div>
                <img src="/img/teclado.jpg" className="w-40 h-40 hover:w-44 hover:h-44 object-cover rounded-lg" />
            </div>
            <div className="flex-col h-20 text-xs mt-1">
                <p>Teclado chingon y Mmlon RedDragon Kumara</p>
                {/* categoria */}
                <p className="font-light">Teclado</p>
                <div className="flex items-end ">
                    <p className="font-light pr-1"><del>S/.295.00</del></p>
                    <p>S/.250.00</p>
                </div>
            </div>
        </div>
    )
}
export function OfertaComponent() {
    return (
        <div className='flex justify-around items-center w-full'>
            <div className='flex flex-col justify-center items-center min-w-[40px] min-h-[40px] rounded-sm border-white border-2'>
                <p>02</p>
                <p>D</p>
            </div>
            <div className='flex flex-col justify-center items-center min-w-[40px] min-h-[40px] rounded-sm border-white border-2'>
                <p>12</p>
                <p>H</p>
            </div>
            <div className='flex flex-col justify-center items-center min-w-[40px] min-h-[40px] rounded-sm border-white border-2'>
                <p>45</p>
                <p>M</p>
            </div>
            <div className='flex flex-col justify-center items-center min-w-[40px] min-h-[40px] rounded-sm border-white border-2'>
                <p>05</p>
                <p>S</p>
            </div>
        </div>
    )
}
export function SliderProducts() {
    const slides = [
        {
            url: "/img/bg4.jpg",
        },
        {
            url: "/img/bg5.jpg",
        },
        {
            url: "/img/bg6.jpg",
        },

        {
            url: "/img/bg7.jpg",
        },
        {
            url: "/img/bg8.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[400px] max-h-[600px] h-screen min-w-full m-auto py-16 px-4 relative group z-20'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide}/>
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide}/>
            </div>
        </div>
    )
}

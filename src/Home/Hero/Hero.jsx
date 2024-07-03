import React from 'react';
import bannerimg from '../../assets/Rectangle 5.png'
import HeSecond from './HeSecond';

const Hero = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto mt-20 '>
            <img src={bannerimg} alt="" />
        </div>
        <HeSecond></HeSecond>
        </div>
    );
};

export default Hero;
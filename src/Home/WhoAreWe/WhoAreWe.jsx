import React from 'react';
import img1 from '../../assets/Rectangle 24.png'

const WhoAreWe = () => {
    return (
        <div className='grid grid-cols-2 max-w-6xl mx-auto'>
            <div className='flex-1 bg-purple-400'>
                <button className='px-6 py-2 bg-[#FFFFF5] border-2 rounded-full border-black font-semibold'>Who Are We</button>
                <h1 className='mt-4 text-5xl font-semibold text-[#020043]'>We Help To Get <br /> Soultions</h1>
                <p className='pr-4 mt-4'>
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

                </p>
                <button className='px-6 py-2 bg-[#FFC637] rounded-lg mt-5'>Learn more</button>
            </div>
            <div className='flex-1 bg-purple-800'>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default WhoAreWe;
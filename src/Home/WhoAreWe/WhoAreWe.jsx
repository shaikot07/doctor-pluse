import React from 'react';
import img1 from '../../assets/Rectangle 24.png'
import { FaArrowTrendUp } from 'react-icons/fa6';

const WhoAreWe = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto items-center'>
            <div className='flex-1 py-6'>
                <button className='px-6 py-2 bg-[#FFFFF5] border-2 rounded-full border-black font-semibold'>Who Are We</button>
                <h1 className='mt-4 text-5xl font-semibold text-[#020043]'>We Help To Get <br /> Soultions</h1>
                <p className=' mt-4 w-[70%]'>
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.

                </p>
                <button className='px-6 py-2 bg-[#FFC637] rounded-lg mt-5 font-semibold'>Learn more <FaArrowTrendUp className='inline' /></button>
            </div>
            <div className='flex-1'>
                <div className='w-full  relative'>
                    <img src={img1} alt="" />
                </div>
                <div className='bg-[#020043] text-white w-[396px] p-6 rounded-2xl mt-[-150px] ml-[-70px] relative z-10'>
                    <h1 className='text-2xl font-semibold mt-2 mb-2'>Our mission is simple</h1>
                    <p>
                        To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
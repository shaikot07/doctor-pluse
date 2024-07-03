import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import img1 from '../../assets/Rectangle 27-2.png'
import img2 from '../../assets/Rectangle 27-1.png'
import img3 from '../../assets/Rectangle 277.png'

const Service = () => {
    return (
        <div className='bg-[#FFFFF5] max-w-6xl mx-auto mt-28 mb-10 ' >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 space-y-8'>
                <div className='w-[524px] h-[350px] '>
                    <button className='px-6 py-2 bg-[#FFFFF5] border-2 rounded-full border-black font-semibold mt-3 mb-2'>Service</button>
                    <h2 className='text-3xl font-semibold mt-2 mb-4'>Empowering Health,<br /> Enriching Lives</h2>
                    <p className='w-[70%] mb-3'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className='px-6 py-2 bg-[#FFC637]  rounded-lg mt-3 font-semibold'>Appointment <FaArrowTrendUp className='inline' /></button>
                </div>
                <div className='w-[524px] h-[350px] rounded-3xl'>
                    
                   <img className='w-[524px] h-[350px] rounded-3xl ' src={img1} alt="" />
                </div>
                <div className='w-[524px] h-[350px] rounded-3xl'>
                    
                   <img className='w-[524px] h-[350px] rounded-3xl ' src={img2} alt="" />
                </div>
                <div className='w-[524px] h-[350px] rounded-3xl'>
                    
                   <img className='w-[524px] h-[350px] rounded-3xl ' src={img3} alt="" />
                </div>
                
                

            </div>
        </div>
    );
};

export default Service;
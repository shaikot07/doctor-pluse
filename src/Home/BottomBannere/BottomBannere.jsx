import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import logo from '../../assets/logo dark.png'

const BottomBannere = () => {
    return (
        <div className=' mt-28 mb-10 max-w-6xl mx-auto bg-black h-[400px] bg-cover bg-center bg-no-repeat bg-[url("https://i.postimg.cc/KjZ8Bfk7/Rectangle-3222.png")]'>
            <div className=" bg-gradient-radial inset-6 bg-gradient-to-r from-[#020043] to-transparent h-[400px]">
                <div className='grid grid-cols-2 z-10 text-white w-[1000px] mx-auto py-16 mt-5 '>
                    <div className='pt-8'>
                        <h1 className='text-3xl font-semibold'>Get Your <br />
                            First Appointment <br />
                            at 50% Off!</h1>
                            <button className='px-6 py-2 bg-[#FFC637]  rounded-lg mt-3 font-semibold'>Appointment <FaArrowTrendUp className='inline' /></button>
                            <button className=' ml-3 px-6 py-2 border-2  rounded-lg mt-3 font-semibold'>Appointment <FaArrowTrendUp className='inline' /></button>
                    </div>
                    <div className=''>
                    <img className='ml-auto' src={logo} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BottomBannere;
// import { FaStar } from "react-icons/fa6";

import { FaStar } from 'react-icons/fa6';
import barChat from '../../assets/barchat.png'
import div2 from '../../assets/div-2.png'
import div3 from '../../assets/div3.png'
import div4 from '../../assets/div4.png'
import div5 from '../../assets/div5.png'

const HeSecond = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8 mb-20 ">
            <h1 className="sm:w-full md;w-[576px] mx-auto text-3xl font-bold text-center mt-8">Comprehensive Care <br />for Every Patient</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-5 sm:mt-[-3px md:mt-[-30px]'>
                <div className="w-[200px] bg-[#FBFBFB] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>90%</h1>
                    <p className='p-2'>Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-[50%] mx-auto' src={barChat} alt="" />
                </div>
                {/* second div  */}
                <div className=" mt-20 w-[200px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>500+</h1>
                    <p >Board-certified <br /> doctors</p>
                    <img className='w-[50%] ml-auto ' src={div2} alt="" />
                </div>
                {/* therd div  */}
                <div className="mt-28 w-[200px] bg-[#FBFBFB] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>4.8 <span ><FaStar className='text-yellow-400 inline'/></span></h1>
                    <p className='py-4 text-left'>Over 20,000 Patient</p>
                    <img className='w-[50%] ' src={div3} alt="" />
                </div>
                {/* forth div  */}
                <div className="mt-20 w-[200px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>$5000</h1>
                    <p className='py-4 text-left'>Money spend <br />
                    for poor patient</p>
                    <img className='w-[50%] ml-auto' src={div4} alt="" />
                </div>
                {/* fifth div  */}
                <div className="w-[200px] bg-[#fffff5] p-4 rounded-xl drop-shadow-md ">
                    <h1 className='text-2xl font-bold'>50+</h1>
                    <p className='py-4'>Free lession video <br />
                    for patient</p>
                    <img className='w-[60%] mx-auto mt-4' src={div5} alt="" />
                </div>
            </div>

        </div>
    );
};

export default HeSecond;
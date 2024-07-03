import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Testimonial = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <button className='px-6 py-2 bg-[#FFFFF5] border-2 rounded-full border-black font-semibold mt-3 mb-2'>Testimonial</button>
            <h2 className='text-2xl font-semibold'>What they say about us</h2>
            <div className='mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
                <div className="w-[370px] bg-[#FFFFF5] shadow-2xl rounded-3xl p-6 r">
                    <h3 className="text-2xl font-semibold capitalize">
                    Expertise and Compassion Combined
                    </h3>
                    <p className=" text-justify text-[0.9rem] my-3 w-[80%] ">
                    I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                            alt="demo/image"
                            className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-[1rem] font-[500]">Sarah D, <span className='text-slate-400'>IT Professional</span></h2>
                            
                            <div className='flex'>
                            <FaStar className='text-yellow-400 '/>
                            <FaStar className='text-yellow-400  '/>
                            <FaStar className='text-yellow-400 '/>
                            <FaStar className='text-yellow-400 '/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second  */}
                <div className="w-[370px] bg-[#FFFFF5] shadow-2xl rounded-3xl p-6">
                    <h3 className="text-2xl font-semibold capitalize">
                    Life-Saving Care, Life-Changing Experience
                    </h3>
                    <p className=" text-justify text-[0.9rem] my-3 w-[80%] ">
                    My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                            alt="demo/image"
                            className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-[1rem] font-[500]">Michael R,  <span className='text-slate-400'>Business Executive</span></h2>
                           
                            <div className='flex'>
                            <FaStar className='text-yellow-400 '/>
                            <FaStar className='text-yellow-400  '/>
                            <FaStar className='text-yellow-400 '/>
                            
                            </div>
                        </div>
                    </div>
                </div>
                {/* thared  */}
                <div className="w-[370px] bg-[#FFFFF5] shadow-2xl rounded-3xl p-6">
                    <h3 className="text-2xl font-semibold capitalize">
                    A Partner in Health and Wellness
                    </h3>
                    <p className=" text-justify text-[0.9rem] my-3 w-[80%] ">
                    As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                            alt="demo/image"
                            className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                        <div>
                            <h2 className="text-[1rem] font-[500]">Michael R,  <span className='text-slate-400'>Business Executive</span></h2>
                            
                            <div className='flex'>
                            <FaStar className='text-yellow-400 '/>
                            <FaStar className='text-yellow-400  '/>
                            <FaStar className='text-yellow-400 '/>
                            <FaStar className='text-yellow-400 '/>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
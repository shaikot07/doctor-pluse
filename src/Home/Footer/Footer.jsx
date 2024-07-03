import React from 'react';
import logo from '../../assets/logo light.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div>

            <footer className=" max-w-6xl mx-auto bg-[#020034] p-6 mt-16">
                <div className='grid sm:grid-cols-1 md:grid-cols-4 mt-8'>
                    <div className="mb-6 md:mb-0">
                        <img src={logo} alt="" />
                        <p className='text-[#CCCCd1] mt-4'>123 Main Street Anytown, USA</p>
                        <p className='text-[#CCCCd1]'>Postal Code: 12345</p>
                        <div className='mt-4'>
                            <p className='text-[#CCCCd1]'>Support: support@oyolloo.com</p>
                            <p className='text-[#CCCCd1]'>(Available : 10:00am to 07:00pm)</p>
                        </div>
                    </div>
                    <div className='text-[#CCCCd1] font-medium'> 
                        <h1 className=''>Home </h1>
                        <h1>About Us</h1>
                        <h1>Success Page</h1>
                        <h1>Terms and condition</h1>
                    </div>
                    <div className='text-[#CCCCd1] font-medium'> 
                        <h1>Services</h1>
                        <h1>Scheduling</h1>
                        <h1>Contact Us</h1>
                        <h1>Patient Portal</h1>
                    </div>
                    <div className='text-[#CCCCd1] font-medium'> 
                        <h1>Follow Us</h1>
                        <div className='text-[#CCCCd1] flex gap-4'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        </div>
                        <h1>@docplus 2024</h1>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

               <h1 className='text-[#CCCCd1] text-center'> © 2024 Y. All rights reserved by shaikot07.</h1>
            </footer>

        </div>
    );
};

export default Footer;
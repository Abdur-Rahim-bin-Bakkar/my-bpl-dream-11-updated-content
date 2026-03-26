import React from 'react';
import FootCard from './FootCard';
import footLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className=' h-120 relative p-10 mb-10'>
            <FootCard></FootCard>
            <img src={footLogo} className='mx-auto my-4 w-25' alt="" />

            <div className="md:flex justify-between my-5 gap-5 space-y-4 py-10">
                <div className="flex flex-1 justify-between gap-25">
                    <div className="">
                        <h1 className='font-bold text-lg my-5'>About US</h1>
                        <p className=''>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="">
                        <h1 className='font-bold text-lg my-5' >Quick Links</h1>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Content</a></li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4 flex-1 pl-4">
                    <h1 className='font-bold text-lg'>Subscribe</h1>
                    <p className=''>Subscribe to our newsletter for the latest updates.</p>
                    <div className="flex">
                        <input type="text" className='input text-black bg-white rounded-r-none' placeholder='Enter your email' name="" id="" />
                        <button className='btn bg-linear-to-r from-[#cd78ad] to-[#faca57] font-bold border-none rounded-l-none'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <p className='text-center py-10'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
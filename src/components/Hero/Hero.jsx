import React from 'react';
import shadow from '../../assets/bg-shadow.png'
import cricket from '../../assets/banner-main.png'
const Hero = () => {
    return (
        <div
            className="hero min-h-screen w-11/12 rounded-2xl mt-20 mx-auto bg-white"
            style={{
                backgroundImage:
                    `url(${shadow})`,
                height: "100%",
                width: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center rounded-2xl">
                <div className="max-w-md">
                    <img src={cricket} alt="" className='w-50 mx-auto' />
                    <h1 className="mb-5 text-3xl my-4 font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <div className='border-[#E7FE29] border w-42 h-15 flex justify-center items-center rounded-2xl mx-auto' >
                        <button className="btn bg-[#E7FE29] text-black font-bold border-none rounded-2xl">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
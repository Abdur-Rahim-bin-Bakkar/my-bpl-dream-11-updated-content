import React from 'react';
// import bg from '../../assets/bg-shadow.png'

const FootCard = () => {
    return (
        <div className='max-w-[800px] mx-auto bg-linear-to-r  from-cyan-500 to-blue-500 text-center py-10 rounded-2xl'>
            <h1 className='font-bold text-2xl my-4'>Subscribe to our Newsletter</h1>
            <p>Get the latest updates and news right in your inbox!</p>
            <div className=" space-x-3 my-5">
                <input type="text" className='input bg-transparent mx-5' name="" id="" placeholder='Enter your email' />
                <button className='btn bg-linear-to-r from-[#cd78ad] to-[#faca57] font-bold border-none'>Subscribe</button>
            </div>
        </div>
    );
};

export default FootCard;
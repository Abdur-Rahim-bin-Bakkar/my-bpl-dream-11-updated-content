import React from 'react';

const Tab = ({tab, setTab,selectPlayer}) => {
    
    return (
        <div className='flex justify-between w-11/12 my-5 mx-auto  items-center'>
            <h1 className='font-bold text-lg'>{tab? "Available Players" : `Selected Player (${selectPlayer.length}/11)`}</h1>
            <div className="border border-success rounded-lg">

                <button onClick={()=>setTab(true)} className={`btn rounded-l-lg rounded-r-none ${tab && "bg-[#E7FE29] text-black font-bold"} duration-1000 ease-in-out`}>Available</button>
                <button onClick={()=>setTab(false)} className={`btn rounded-r-lg rounded-l-none ${tab || "bg-[#E7FE29] text-black font-bold"} duration-1000 ease-initial`}>Selected {`(${selectPlayer.length})`}</button>
            </div>
        </div>
    );
};

export default Tab;
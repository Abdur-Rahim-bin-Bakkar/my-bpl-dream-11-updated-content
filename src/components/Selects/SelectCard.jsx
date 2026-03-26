import React from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const SelectCard = ({ player, selectPlayer, setSelectPlayer,coin, setCoin }) => {
    return (
        <div className='border border-success rounded-lg my-3 shadow-md flex justify-between items-center m-4 p-5 '>
            <div className="flex gap-5">
                <img src={player.image} alt="" className='w-10 h-10' />
                <div className="">
                    <h1>{player.name}</h1>
                    <h1>{player.style}</h1>
                </div>

            </div>

            <FaDeleteLeft onClick={()=>{
                let newSelect = selectPlayer.filter(pl=> pl.id !== player.id)
                setSelectPlayer(newSelect)
                toast.warning(`Delete a Player ${player.name}`)
                setCoin(coin+ player.price)
            }}></FaDeleteLeft>
        </div>
    );
};

export default SelectCard;
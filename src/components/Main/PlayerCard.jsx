import React, { useState } from 'react';
import { BiFlag, BiUserCircle } from 'react-icons/bi';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, coin, setCoin, setSelectPlayer, selectPlayer }) => {
    const [select, setSelect] = useState(false)
    return (
        <div className='card shadow-md m-4 p-5 border'>
            <img src={player.image} alt="" />
            <div className="card-body">
                <h1 className='flex gap-3 items-center text-lg font-bold'><FaUser></FaUser>{player.name}</h1>
                <div className="flex justify-between">
                    <h3 className='flex gap-3 items-center  font-bold'><FaFlag></FaFlag>{player.country}</h3>
                    <button className='btn btn-primary'>{player.category}</button>
                </div>
                <div className='divider'></div>
                <h1>{player.style}</h1>
                <div className="flex justify-between my-3">
                    <p className='text-lg text-success font-bold'>{player.price}</p>
                    <button disabled={select} onClick={() => {
                        if (player.price > coin) {
                            toast.error('Your buget is very low')
                            return;
                        }
                        if (selectPlayer.length > 10) {
                            toast.error('you can not select 11+ player')
                            return;
                        }
                        setSelectPlayer([...selectPlayer, player])
                        setSelect(true)
                        setCoin(coin - player.price)
                        toast.success(`successful add ${player.name}`)
                    }} className={`btn btn-success`}>{select ? "Selected" : "Choice Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
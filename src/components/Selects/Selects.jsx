import React from 'react';
import SelectCard from './SelectCard';
import { FaEmpire, FaThermometerEmpty } from 'react-icons/fa';

const Selects = ({selectPlayer,setSelectPlayer,coin, setCoin}) => {
    return (
        <div className='w-11/12 mx-auto'>
            {
                selectPlayer.length !== 0?
                selectPlayer.map(player=> <SelectCard key={player.id} player={player} setSelectPlayer={setSelectPlayer} selectPlayer={selectPlayer} coin={coin} setCoin={setCoin}></SelectCard>)
                : 
                <div className='card border border-error'>
                    <h1 className='text-center text-error font-bold my-3'>Place ADD Players</h1>
                    <FaThermometerEmpty className='mx-auto my-5 text-5xl'></FaThermometerEmpty>
                </div>
           
            }
        </div>
    );
};

export default Selects;
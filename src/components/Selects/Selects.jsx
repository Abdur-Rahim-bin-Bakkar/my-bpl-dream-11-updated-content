import React from 'react';
import SelectCard from './SelectCard';

const Selects = ({selectPlayer,setSelectPlayer,coin, setCoin}) => {
    return (
        <div className='w-11/12 mx-auto'>
            {
                selectPlayer.map(player=> <SelectCard key={player.id} player={player} setSelectPlayer={setSelectPlayer} selectPlayer={selectPlayer} coin={coin} setCoin={setCoin}></SelectCard>)
            }
        </div>
    );
};

export default Selects;
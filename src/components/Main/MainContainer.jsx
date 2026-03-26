import React, { use } from 'react';
import PlayerCard from './PlayerCard';

const MainContainer = ({data,coin,setCoin,selectPlayer, setSelectPlayer}) => {
    const useData = use(data)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 pb-10'>
            {
                useData.map(player=> <PlayerCard key={player.id} player={player} coin={coin} setCoin={setCoin} setSelectPlayer={setSelectPlayer} selectPlayer={selectPlayer}></PlayerCard>)
            }
        </div>
    );
};

export default MainContainer;
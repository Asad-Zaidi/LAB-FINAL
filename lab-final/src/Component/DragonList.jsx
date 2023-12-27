import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, selectAllDragons, selectDragon } from '../app/features/dragonSlice';

const DragonList = () => {
    const dispatch = useDispatch();
    const dragons = useSelector(selectAllDragons);

    useEffect(() => {
        dispatch(fetchDragons());
    }, [dispatch]);

    const handleDragonSelect = (dragon) => {
        dispatch(selectDragon(dragon));
    };

    return (
        <div>
            <h2>Dragon List</h2>
            {dragons.map((dragon) => (
                // <div key={dragon.id} onClick={() => handleDragonSelect(dragon)}>
                //     {dragon.name}
                // </div>
                <div key={dragon.id}>
                    <p>{dragon.name}</p>
                    <button onClick={() => handleDragonSelect(dragon)}>Select</button>
                </div>
            ))}
        </div>
    );
};

export default DragonList;

import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedDragon } from '../app/features/dragonSlice';

const SelectedDragon = () => {
    const selectedDragon = useSelector(selectSelectedDragon);

    return (
        <div>
            <h2>Selected Dragon</h2>
            {selectedDragon ? (
                <div>
                    <p>Name: {selectedDragon.name}</p>
                    <p>Type: {selectedDragon.type}</p>
                    {selectedDragon.flickr_images.length > 0 && (
                        <div>
                            <p>Images:</p>
                            <div>
                                {selectedDragon.flickr_images.map((image, index) => (
                                    <img key={index} src={image} alt={`${selectedDragon.name} - ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>No dragon selected</p>
            )}
        </div>
    );
};

export default SelectedDragon;

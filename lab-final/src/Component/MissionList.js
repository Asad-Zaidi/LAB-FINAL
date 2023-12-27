import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, selectAllMissions, selectMission } from '../app/features/missionsSlice';

const MissionList = () => {
    const dispatch = useDispatch();
    const missions = useSelector(selectAllMissions);

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    const handleMissionSelect = (mission) => {
        dispatch(selectMission(mission));
    };

    const handleJoinLeaveMission = (mission) => {
        // Implement join/leave logic here
        console.log(`User joined/left mission: ${mission.name}`);
    };

    return (
        <div>
            <h2>Mission List</h2>
            {missions.map((mission) => (
                <div key={mission.id}>
                    <p>{mission.name}</p>
                    <p>Description: {mission.description}</p>
                    <p>Participation Status: {/* Add logic to display participation status */}</p>
                    <button onClick={() => handleMissionSelect(mission)}>Select</button>
                    <button onClick={() => handleJoinLeaveMission(mission)}>
                        {/* Add logic to display "Join" or "Leave" based on participation status */}
                        Join/Leave
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MissionList;

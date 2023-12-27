import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
// import DragonList from '../Component/DragonList';
// import SelectedDragon from '../Component/SelectedDragon';
import MissionList from '../Component/MissionList';
import Head from '../Nav-Bar/Header'

const Mission = () => {
  return (
    <>
      <Head />
      <Provider store={store}>
        <div className="container">
          <h1>Dragon Space Mission App</h1>
          <div className="mission-card">
          <MissionList />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default Mission
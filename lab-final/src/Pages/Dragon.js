import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import DragonList from '../Component/DragonList';
import SelectedDragon from '../Component/SelectedDragon';
import Head from '../Nav-Bar/Header'
import '../App.css'

export default function Dragon() {
  return (
    <>
      <Head />
      <Provider store={store}>
        <div className="container">
          <h1>Dragon Space Mission</h1>
          <div className="dragon-list">
            <div className="dragon-item">
              <DragonList />
            </div>
            <div className="dragon-item selected-dragon">
              <SelectedDragon />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}
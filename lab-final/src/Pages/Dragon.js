import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import DragonList from '../Component/DragonList';
import SelectedDragon from '../Component/SelectedDragon';
import Head from '../Nav-Bar/Header'

export default function Dragon() {
  return (
    <>
      <Head />
      <Provider store={store}>
        <div>
          <h1>Dragon Space Mission</h1>
          <DragonList />
          <SelectedDragon />
        </div>
      </Provider>
    </>
  );
}
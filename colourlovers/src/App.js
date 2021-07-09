import React, { useEffect, useState, useRef } from 'react';
import './styles/App.scss';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import ColourArea from './components/ColourArea';
import Loading from './components/Loading';

import Header from './components/MainHeader/Header';

const App = () => {
  const [colours, setColours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTime, setRefreshTime] = useState(60000);

  const getColours = () => {
    timeUpdater.current.setLoadingStatus(true);
    fetch('https://www.colourlovers.com/api/palettes/top?format=json')
      .then((response) => response.json())
      .then((data) => {
        setColours(data);
        setLoading(false);
        timeUpdater.current.updateData();
        timeUpdater.current.setLoadingStatus(false);
      });
  };
  const timeUpdater = useRef();

  useEffect(() => {
    getColours();
    const interval = setInterval(() => {
      getColours();
    }, refreshTime);

    return () => clearInterval(interval);
  }, [refreshTime]);
  return (
    <div className="wrapper">
      <div className="main">
        <Header ref={timeUpdater} />
        <XyzTransitionGroup xyz="fade">
          {loading ? (
            <Loading
              key="loading"
              overlay
              textDescription="Loading"
              height={150}
              width={150}
            />
          ) : (
            <ColourArea colours={colours} />
          )}
        </XyzTransitionGroup>
      </div>
    </div>
  );
};

export default App;

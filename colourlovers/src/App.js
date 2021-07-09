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

  const getColours = () => {
    fetch('https://www.colourlovers.com/api/palettes/top?format=json')
      .then((response) => response.json())
      .then((data) => {
        setColours(data);
        setLoading(false);
        timeUpdater.current.updateData();
      });
  };
  const MINUTE_MS = 60000;
  const timeUpdater = useRef();

  useEffect(() => {
    getColours();
    const interval = setInterval(() => {
      getColours();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="wrapper">
      <div className="main">
        <Header ref={timeUpdater} />
        <XyzTransitionGroup xyz="fade">
          {loading ? (
            <Loading
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

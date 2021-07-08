import React, { useEffect, useState, useRef } from 'react';
import './styles/App.scss';
import '@animxyz/core';
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react';
import Loader from 'react-loader-spinner';

import Header from './components/MainHeader/Header';
import ColourCard from './components/ColourFamily/ColourCard';

const App = () => {
  const [colours, setColours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getColours = () => {
    fetch('https://www.colourlovers.com/api/palettes/top?format=json')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setColours(data);
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
      <XyzTransition appear xyz="fade rotate-right">
        {!loading ? (
          <div className="main">
            <Header ref={timeUpdater} />
            <XyzTransitionGroup
              appearVisible
              className="card-section"
              xyz="fade small out-down out-rotate-right appear-stagger stagger-1"
            >
              {colours.map((data) => (
                <div key={data.id}>
                  <ColourCard {...data} />
                </div>
              ))}
            </XyzTransitionGroup>
          </div>
        ) : (
          <div className="loader">
            <Loader type="Puff" color="#00BFFF" height={150} width={150} />
          </div>
        )}
      </XyzTransition>
    </div>
  );
};

export default App;

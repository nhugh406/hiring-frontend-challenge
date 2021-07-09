import React from 'react';
import { array } from 'prop-types';
import ColourCard from './ColourFamily/ColourCard';
import { XyzTransitionGroup } from '@animxyz/react';

const propTypes = {
  colours: array.isRequired,
};

const ColourArea = ({ colours }) => {
  return (
    <XyzTransitionGroup
      appear
      className="card-section"
      xyz="fade small out-down out-rotate-right appear-stagger stagger-1"
    >
      {colours.map((data) => (
        <div key={data.id}>
          <ColourCard {...data} />
        </div>
      ))}
    </XyzTransitionGroup>
  );
};
ColourArea.propTypes = propTypes;
export default ColourArea;

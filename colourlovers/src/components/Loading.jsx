import React from 'react';
import { number, string, bool } from 'prop-types';
import Loader from 'react-loader-spinner';

const propTypes = {
  height: number,
  width: number,
  type: string,
  textDescription: string,
  overlay: bool,
};

const defaultProps = {
  height: 16,
  width: 16,
  type: 'Puff',
  textDescription: null,
  overlay: false,
};

const Loading = ({ height, width, type, textDescription, overlay }) => {
  return (
    <div className={overlay ? 'loader' : 'inlineLoader'} key="loader">
      <Loader type={type} color="#00BFFF" height={height} width={width} />
      {textDescription && <h2>{textDescription}</h2>}
    </div>
  );
};
Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
export default Loading;

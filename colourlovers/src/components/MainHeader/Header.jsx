import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './Styles.scss';
import Loading from '../Loading';
const Header = forwardRef((props, ref) => {
  const time = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    const formattedTime = `${h > 12 ? h - 12 : h}:${m} ${h > 12 ? 'pm' : 'am'}`;
    setUpdateTime(formattedTime);
  };

  const [updateTime, setUpdateTime] = useState();
  const [loading, setLoading] = useState();

  useImperativeHandle(ref, () => ({
    updateData() {
      time();
    },
    setLoadingStatus(value) {
      setLoading(value);
    },
  }));

  return (
    <div className="mainHeader">
      <h1>
        Colour Lovers. <span className="boldText">Live.</span>
      </h1>
      <h3 className="updateTimer">
        Last Updated at {updateTime}
        {loading && <Loading type="Puff" />}
      </h3>
    </div>
  );
});

export default Header;

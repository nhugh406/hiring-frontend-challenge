import React, { forwardRef, useImperativeHandle, useState } from 'react';
import './Styles.scss';
const Header = forwardRef((props, ref) => {
  const time = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const form = `${h > 12 ? h - 12 : h}:${m} ${h > 12 ? 'pm' : 'am'}`;
    setUpdateTime(form);
  };

  const [updateTime, setUpdateTime] = useState();

  useImperativeHandle(ref, () => ({
    updateData() {
      time();
    },
  }));

  return (
    <div className="main-header">
      <h1>
        Colour Lovers. <span className="bold-text">Live.</span>
      </h1>
      <h3 className="update-timer">Last Updated at {updateTime}</h3>
    </div>
  );
});

export default Header;

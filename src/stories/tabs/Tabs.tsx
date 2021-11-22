import React from 'react';
import './Tabs.scss';

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs-item">
        <i>icon</i>
        <a>Porperties</a>
      </div>
      <div className="tabs-item active">
        <i>icon</i>
        <a>markets</a>
      </div>
      <div className="tabs-item">
        <i>icon</i>
        <a>saved</a>
      </div>
    </div>
  );
};

export default Tabs;

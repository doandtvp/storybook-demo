import React, { useState } from 'react';
import './Tabs.scss';
import {
  HomeOutlined,
  HeartOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const Tabs = () => {
  const [active, setActive] = useState(1);

  const handleActive = (data: number) => {
    setActive(data);
  };

  return (
    <div className="tabs">
      <div
        className={active === 0 ? 'tabs-item active' : 'tabs-item'}
        onClick={() => handleActive(0)}
      >
        <i>
          <HomeOutlined />
        </i>
        <span>Porperties</span>
      </div>
      <div
        className={active === 1 ? 'tabs-item active' : 'tabs-item'}
        onClick={() => handleActive(1)}
      >
        <i>
          <EnvironmentOutlined />
        </i>
        <span>markets</span>
      </div>
      <div
        className={active === 2 ? 'tabs-item active' : 'tabs-item'}
        onClick={() => handleActive(2)}
      >
        <i>
          <HeartOutlined />
        </i>
        <span>saved</span>
      </div>
    </div>
  );
};

export default Tabs;

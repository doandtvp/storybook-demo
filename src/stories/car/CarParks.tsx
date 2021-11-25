import React, { useState } from 'react';
import { CarOutlined } from '@ant-design/icons';

import './CarParks.scss';

const value = ['Any', '1+', '2+', '3+', '4+', '5+'];

function CarParks() {
  const [active, setActive] = useState(1);

  const handleActive = (value: number) => {
    setActive(value);
  };

  return (
    <div className="car-parks">
      <div className="car-parks-title">
        <CarOutlined className="car-parks-title__icon" />
        <span>Car parks</span>
      </div>
      <div className="car-parks-content">
        <ul>
          {/* <li>Any</li> */}
          {value.map((item, index) => (
            <li
              className={active === index ? 'active' : ''}
              key={index}
              onClick={() => handleActive(index)}
            >
              {item}
            </li>
          ))}
          {/* <li className="active">1+</li>
          <li>2+</li>
          <li>3+</li>
          <li>4+</li>
          <li>5+</li> */}
        </ul>
      </div>
    </div>
  );
}

export default CarParks;

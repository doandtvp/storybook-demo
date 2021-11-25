import React, { useState } from 'react';
import { Slider } from 'antd';
import './SearchSlider.scss';
import { DollarOutlined } from '@ant-design/icons';

const SearchSlider = () => {
  const range = {
    min: 100,
    max: 1000,
  };

  const [value, setValue] = useState({
    min: 200,
    max: 500,
  });

  const getValue = (value: number[]) => {
    setValue({ min: value[0], max: value[1] });
  };

  const afterValue = (value: number[]) => {
    setValue({ min: value[0], max: value[1] });
  };

  return (
    <div className="search-slider">
      <div className="search-slider__title">
        <div>
          <DollarOutlined className="budget-icon" />
          <h3>Budget</h3>
        </div>

        <div className="budget-range">
          <p>{`$${value.min}k-$${value.max}k`}</p>
        </div>
      </div>
      <Slider
        range={true}
        step={5}
        min={range.min}
        max={range.max}
        defaultValue={[value.min, value.max]}
        className="search-slider__content"
        tooltipPlacement="top"
        id="anhdeptrai"
        onChange={getValue}
        onAfterChange={afterValue}
      />
    </div>
  );
};

export default SearchSlider;

import React from 'react';
import { Checkbox } from 'antd';
import './CheckboxComponent.scss';

const CheckboxComponent = () => {
  return (
    <div className="checkbox">
      <Checkbox className="checkbox-content">
        Exclude properties under offer
      </Checkbox>
    </div>
  );
};

export default CheckboxComponent;

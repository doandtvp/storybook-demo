import React from 'react';
import './ToggleButton.scss';
import { Switch } from 'antd';

const ToggleButton = () => {
  return (
    <div className="toggle-button">
      <p>Email notifications:</p>

      <Switch defaultChecked />
    </div>
  );
};

export default ToggleButton;

import { KeyOutlined } from '@ant-design/icons';
import Input from '../input/InputType';
import React from 'react';
import './KeyWord.scss';

const KeyWord = () => {
  return (
    <div className="keyword">
      <div className="keyword-title">
        <KeyOutlined className="keyword-title__icon" />
        <span>Key words</span>
      </div>
      <div className="keyword-content">
        <Input name="" type="text" bgC="#fff" />
      </div>
    </div>
  );
};

export default KeyWord;

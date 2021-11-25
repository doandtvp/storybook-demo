import React, { useState } from 'react';
import './InputType.scss';
import { Input } from 'antd';

interface InputTypeI {
  name: string;
  type: string;
  bgC?: string;
}

const InputType = (props: InputTypeI) => {
  const { name, type, bgC } = props;
  const [value, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  console.log(value);

  return (
    <div className="input">
      <label className="input-label">{name}</label>
      <Input
        placeholder="Type here..."
        className="input-content"
        type={type}
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: bgC }}
      />
    </div>
  );
};

export default InputType;

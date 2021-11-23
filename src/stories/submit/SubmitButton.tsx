import React from 'react';
import './SubmitButton.scss';
import { RightCircleOutlined } from '@ant-design/icons';

interface SubmitButtonProps {
  label: string;
  classType: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SubmitButton = ({
  disabled,
  label,
  classType,
  ...props
}: SubmitButtonProps) => {
  return (
    <button type="button" disabled={disabled} className="btn-submit" {...props}>
      <div className="submit-content">{label}</div>
      <i>
        <RightCircleOutlined />
      </i>
    </button>
  );
};

export default SubmitButton;

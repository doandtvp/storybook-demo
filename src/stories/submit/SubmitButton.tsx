import React from 'react';
import './SubmitButton.scss';

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
      {label}
      <span>icons</span>
    </button>
  );
};

export default SubmitButton;

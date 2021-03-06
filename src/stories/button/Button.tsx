import './Button.scss';

interface ButtonProps {
  label: string;
  classType: string;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ disabled, label, classType, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`button ${classType}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

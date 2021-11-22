import { action } from "@storybook/addon-actions";
import "./input.scss";

interface InputProps {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
}

const handleChange = (e: any) => {
  console.log(e.target.value);

  action(e.target.name)(e.target.value);
};

/**
 * Primary UI component for user interaction
 */
export const Input = ({ id, name, type, placeholder, value }: InputProps) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

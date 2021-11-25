import { Select } from 'antd';
import './SelectBox.scss';
import {
  HomeOutlined,
  EnvironmentOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

const SelectBox = () => {
  const { Option } = Select;

  function handleChange(value: string) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="dropdown-group">
      <Select
        defaultValue="Properties"
        style={{ width: 120 }}
        onChange={handleChange}
        defaultActiveFirstOption={true}
        dropdownMatchSelectWidth={false}
      >
        <Option value="Properties">Properties</Option>
        <Option value="Market">Market</Option>
      </Select>
    </div>
  );
};

export default SelectBox;

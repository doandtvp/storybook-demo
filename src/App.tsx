import { Switch } from 'antd';
import Sidebar from './stories/sidebar/Sidebar';
import Tabs from './stories/tabs/Tabs';
import { HomeOutlined, HeartOutlined } from '@ant-design/icons';

function App() {
  const arr2 = [
    {
      icon: <HomeOutlined />,
      name: 'properties',
    },
    {
      icon: <HeartOutlined />,
      name: 'markets',
    },
  ];

  return (
    <div className="App">
      <Sidebar />
      <Switch />
      <Tabs mw="900px" lists={arr2} />
    </div>
  );
}

export default App;

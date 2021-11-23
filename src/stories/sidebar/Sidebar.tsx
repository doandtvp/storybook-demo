import { useState } from 'react';
import './Sidebar.scss';
import webappLogo from '../../images/sidebar/webappLogo.png';
import smLogo from '../../images/sidebar/smLogo.png';
import {
  MenuFoldOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
  HomeFilled,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';

interface SidebarProps {
  onClick: () => void;
}

const menu = [
  {
    icons: <MenuFoldOutlined />,
    name: 'dashboard',
    notification: '',
  },
  {
    icons: <HomeOutlined />,
    name: 'My portfolio',
    notification: '',
  },
  {
    icons: <HomeFilled />,
    name: 'Pending properties',
    notification: '',
  },
  {
    icons: <SearchOutlined />,
    name: 'search',
    notification: '',
  },
  {
    icons: <BellOutlined />,
    name: 'Notification',
    notification: '7',
  },
  {
    icons: <HeartOutlined />,
    name: 'wishlist',
    notification: '34',
  },
  {
    icons: <MessageOutlined />,
    name: 'contact',
    notification: '',
  },
  {
    icons: <UserOutlined />,
    name: 'account',
    notification: '',
  },
];

const Sidebar = (props: SidebarProps) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('dashboard');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle ? 'sidebar-sm' : 'sidebar'}>
      <div className="sidebar-logo">
        <img src={toggle ? smLogo : webappLogo} alt="sidebar-logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          {menu.map((item) => (
            <li
              key={item.name}
              className={active === item.name ? 'active' : ''}
              onClick={() => setActive(item.name)}
            >
              <i>{item.icons}</i>
              <div className="sidebar-menu__items">
                <a href={`##${item.name}`}>{item.name}</a>

                {item.notification && (
                  <span className="sidebar-menu__notification">
                    {item.notification}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-toggle" onClick={handleToggle}>
        <i className="zmdi zmdi-view-dashboard">
          <VerticalAlignTopOutlined
            style={{ transform: 'rotate(-90deg)', fontSize: '30px' }}
          />
        </i>
        <p>Close</p>
      </div>
    </div>
  );
};

export default Sidebar;

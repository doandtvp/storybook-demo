import React, { useState } from "react";
import "./Sidebar.scss";
import webappLogo from "../../images/sidebar/webappLogo.png";
import smLogo from "../../images/sidebar/smLogo.png";

interface SidebarProps {
  menu: [{ icons: string; name: string; notification: string }];
  onClick: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const [toggle, setToggle] = useState(false);
  const { menu } = props;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle ? "sidebar-sm" : "sidebar"}>
      <div className="sidebar-logo">
        <img src={toggle ? smLogo : webappLogo} alt="sidebar-logo" />
      </div>
      <div className="sidebar-menu">
        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <i className={`zmdi zmdi-${item.icons}`}>icons</i>
              <div className="sidebar-menu__items">
                <a href={`#${item.name}`}>{item.name}</a>
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
        <i className="zmdi zmdi-view-dashboard">{"<"}</i>
        <p>Close</p>
      </div>
    </div>
  );
};

export default Sidebar;

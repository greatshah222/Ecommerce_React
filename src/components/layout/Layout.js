import React, { useState } from 'react';
import ToolBar from '../Navigation/Toolbar/ToolBar';
import SideBar from '../Navigation/SideBar/SideBar';

function Layout(props) {
  const [showSideBar, setshowSideBar] = useState(false);
  const sideBarCloseHandler = () => {
    setshowSideBar((prevState) => !prevState);
  };
  return (
    <>
      <ToolBar toggleSideBar={sideBarCloseHandler} />
      <SideBar closeSideBar={sideBarCloseHandler} openSideBar={showSideBar} />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;

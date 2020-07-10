import React from 'react';
import ToolBar from '../Navigation/Toolbar/ToolBar';

function Layout(props) {
  return (
    <>
      <ToolBar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;

import React from 'react';
import Header from './Header';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <div>{props.children}</div>
  </React.Fragment>
);

export default Layout;

import React from "react";
import Helmet from 'react-helmet';
import Header from './header/header';
import './styles/styles.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BeOne Retreat</title>
      <meta name="description" content="BeOne Retreat info site" />
    </Helmet>
    <Header />
    {children}
  </div>
);

export default Layout;
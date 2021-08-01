/* eslint-disable linebreak-style */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

export default function Nav() {
  return (
    <Menu
      theme="dark"
      mode="horizontal "
      style={{ margin: '0 auto', textAlign: 'center', width: 'fit-content' }}
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="search">
        <Link to="/search">Search</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to="/education">Education</Link>
      </Menu.Item>
    </Menu>
  );
}

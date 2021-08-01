/* eslint-disable linebreak-style */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import { Layout } from 'antd';
import Nav from './components/Nav';
import Education from './components/Education';
import Search from './components/Search';
import Home from './components/Home';

import 'antd/dist/antd.css';

import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Content style={{ padding: '50px 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/education" component={Education} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </Content>
        <Nav style={{ textAlign: 'center' }} />

      </Layout>
    </Router>
  );
}

export default App;

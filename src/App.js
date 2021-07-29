import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";


import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const {Content, Footer } = Layout;

import './App.css';

function App() {
  return (
    <Router>
    <Layout className="layout">
    <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/education" component={Education}/>
        </Switch>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', display: 'flex',flexWrap:'wrap',justfiyContent: 'center'}}>




      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} style={{display: 'flex',margin: '0 auto'}}>
        <Menu.Item><Link to="/" >Home</Link></Menu.Item>
        <Menu.Item><Link to="/search" >Search</Link></Menu.Item>
        <Menu.Item><Link to="/education" >Education</Link></Menu.Item>
      </Menu>
    </Footer>
  </Layout>
    </Router>
  );
}

function Home() {

  return (<>Im Home</>);
}

function Search() {

  return (<>Im Search</>);
}

function Education() {

  return (<>Im Education</>);
}


export default App;
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from './@pages/Dashboard/';

import routes from './@routes';

import 'antd/dist/antd.css';
import './App.css';

const Content = Layout.Content;

function App() {
  return (
    <div className="App">
      <Content className="container">
        <Switch>
          {routes.map((route, idx) => (
            <Route exact key={`${route.path} - ${idx}`} {...route} />
          ))}
        </Switch>
      </Content>
    </div>
  );
}

export default withRouter(App);

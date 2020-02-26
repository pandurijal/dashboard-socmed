import React from 'react';
import { Layout } from 'antd';
import UserList from './../UserList';

const Content = Layout.Content;

const Dashboard = () => {
  return (
    <Content className="container">
      <UserList />
    </Content>
  );
};

export default Dashboard;

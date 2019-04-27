'use es6';

import React from 'react';
import { Layout, Icon, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const Sidebar = ({ children }) => (
  <Layout className="cover">
    <Sider
      style={{ minHeight: '100vh' }}
      id="sider-menu"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">
          <Icon type="user" />
          <span className="nav-ingredients">Home</span>
        </Menu.Item>
        <Menu.Item key="favorites">
          <Icon type="star" />
          <span className="nav-ingredients">Favorites</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
    </Layout>
  </Layout>
);

export default Sidebar;

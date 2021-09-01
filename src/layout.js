import React, { Component, useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import { render } from 'react-dom';

import MainFooter from './MainFooter';
import MainBody from './MainBody';

export default function SiderDemo() {
  const [selectedMenu, setSelectedMenu] = useState(''); // 선택한 메뉴 state manangement
  const [collapse, setCollapse] = useState(false); // 사이드바 collapse state management. 디폴드 값은 false

  const { Header, Sider } = Layout;
  const SubMenu = Menu.SubMenu;

  return (
    <Layout style={{ minHeight: '100vh' }}>

      {/* 사이드바 부분 */}
      <Sider
        collapsible
        collapsed={collapse}
        onCollapse={() => setCollapse(!collapse)}
      >
        <div className="logo" />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

          {/* 메뉴 1 : 홈 */}
          <Menu.Item key="1" onClick={() => setSelectedMenu('Home')}>
            <Icon type="pie-chart" />
            <span>Home</span>
          </Menu.Item>

          {/* 메뉴 2 : 봇 선택 */}
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>봇 선택</span></span>} >
            <Menu.Item key="2" onClick={() => setSelectedMenu('Tom')}>Tom</Menu.Item>
            <Menu.Item key="3" onClick={() => setSelectedMenu('Bill')}>Bill</Menu.Item>
            <Menu.Item key="4" onClick={() => setSelectedMenu('Alex')}>Alex</Menu.Item>
          </SubMenu>

        </Menu>
      </Sider>

      {/* 오른쪽 부분 */}
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <MainBody selectedMenu={selectedMenu} />
        <MainFooter />
      </Layout>
    </Layout>
  )
};
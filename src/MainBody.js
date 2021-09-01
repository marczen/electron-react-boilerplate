import React from 'react'
import { Layout, Breadcrumb } from 'antd';

function MainBody(props) {

  // 홈을 선택했을 때 보이는 view
  const HomeView = () => {
    return (
      <Layout.Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          안녕하세요, 본 서비스는 로코 프로토콜을 이용해 패킷을 보내는 방식으로 여러분의 마케팅을 도와줄 툴입니다.
        </div>
      </Layout.Content>
    )
  }

  // 봇을 선택했을 때 보이는 view
  const BotView = () => {
    return (
      <Layout.Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>{props.selectedMenu}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {props.selectedMenu} is clicked.
        </div>
      </Layout.Content>
    )
  }

  return (
    <>
      {props.selectedMenu === 'Home' || !props.selectedMenu ? <HomeView /> : <BotView />}
    </>
  )
}

export default MainBody
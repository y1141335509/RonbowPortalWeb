import React, { useState } from 'react';
import {
  HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined,
  DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined,
  UserOutlined, ToolOutlined, BookOutlined,
  NotificationOutlined, MessageOutlined,
  MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, theme, Avatar, Switch } from 'antd';
import ProjectProfile from '../projectprofile/projectprofile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './homepage.css';
import '../../index.css';
import UserProfile from '../userprofile/userprofile';


// ref: https://stackblitz.com/edit/react-jy9ujl?file=index.js,demo.js,index.html
// ref: https://stackblitz.com/run?file=demo.js

const { Header, Content, Sider } = Layout;

const featureList = [
  {key: '1', icon: <HomeOutlined/>, label: 'Homepage'},
  {key: '2', icon: <ScheduleOutlined/>, label: 'Schedule'},
  {key: '3', icon: <ContactsOutlined/>, label: 'Contact Info'},
  {key: '4', icon: <ProjectOutlined/>, label: 'Project Info'},
  {key: '5', icon: <DollarOutlined/>, label: 'Sales Target'},
  {key: '6', icon: <FireOutlined/>, label: 'Commission'},
  {key: '7', icon: <AntDesignOutlined/>, label: 'Design Tool'},
  {key: '8', icon: <CommentOutlined/>, label: 'Communication'},
  {key: '9', icon: <ToolOutlined/>, label: 'Userful Tools'},
  {key: '10', icon: <BookOutlined/>, label: 'Training Materials'},
  {key: '11', icon: <ContactsOutlined/>, label: 'Internal Contact'},
];


const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);

  

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={featureList} />
      </Sider>

      {/* inner Layout starts here */}
      <Layout style={{ padding: '0 5px 24px', }} >
        <Header className="site-layout-background custom-header" style={{ padding: 0, }}>
          {/* <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">
                  <a href="https://www.aliyun.com">User Profile</a>
                </Menu.Item>
              </Menu>
            }
            placement="bottomLeft"
            arrow
          >
            <Avatar style={{ backgroundColor: 'grey', }} icon={<UserOutlined />} />
          </Dropdown> */}

          {/* Navigation on Header starts here */}
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/project-profile">Project</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              <Link to="/user-profile">User Profile</Link>
              {/* User Profile */}
            </Menu.Item>
          </Menu>
          
        </Header>

        {/* Main Content starts here */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >

          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/user-profile" component={UserProfile}></Route>
            <Route path="/project-profile" compoennt={ProjectProfile}></Route>
          </Switch>
          
        </Content>
        {/* Main Content ends here */}

      </Layout>
      {/* inner Layout ends here */}

    </Layout>
  );
};
export default Homepage;
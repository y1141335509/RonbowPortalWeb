import React, { useState } from 'react';
import {
  HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined,
  DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined,
  UserOutlined, ToolOutlined, BookOutlined,
  NotificationOutlined, MessageOutlined,
  MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined, CustomerServiceOutlined, 
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, theme, Avatar, Switch } from 'antd';
import ProjectProfile from '../projectprofile/projectprofile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './homepage.css';
import '../../index.css';
import CustomerProfile from '../customerprofile/customerprofile';



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
  const [showContent, setShowContent] = useState("");
  
  const handleClickNavigation = () => {
    switch(showContent) {
      case 'customer-profile':
        return <CustomerProfile />;
      case 'project-profile':
        return <ProjectProfile />;
      default:
        return
    }
  }


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh',  }}>

      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={featureList} />
      </Sider>

      {/* inner Layout starts here */}
      <Layout style={{ padding: '0 5px 24px', backgroundColor: 'white', }} >
        <Header className="site-layout-background custom-header" style={{ padding: 0, }}>

          {/* Navigation on Header starts here */}
          <div className="logo" />
          <Menu theme='dark' mode='horizontal' >
            <Menu.Item 
              key="1" 
              icon={<CustomerServiceOutlined />} 
              onClick={() => setShowContent('customer-profile')}
            >
              <Link to="/">Customer Profile</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<UserOutlined />} onClick={() => setShowContent('project-profile')}>
              <Link to="/">Project Profile</Link>
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
            maxHeight: 500,
            width: '100%', 
            height: 'auto',
            maxWidth: '100%',
            fontFamily: 'Roboto, sans-serif', 
            fontSize: '18px', 
            fontWeight: "300",
            lineHeight: "30px",
            letterSpacing: "0.02em",
            textAlign: "left",
            alignItems: 'center', // horizontally center children
            justifyContent: 'center', // vertically center children
            height: '100vh', // or whatever height you want for the parent
            backgroundColor: 'white',
          }}
        >
          { handleClickNavigation() }

        {/* <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/user-profile" component={UserProfile}></Route>
          <Route path="/" component={ProjectProfile}></Route>
        </Switch> */}
          
        </Content>
        {/* Main Content ends here */}

      </Layout>
      {/* inner Layout ends here */}

    </Layout>
  );
};
export default Homepage;
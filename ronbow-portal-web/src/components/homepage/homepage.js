import React, { useState } from 'react';
import {
  HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined,
  DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined,
  UserOutlined, ToolOutlined, BookOutlined, CustomerServiceOutlined, 
  VideoCameraOutlined, PlusSquareOutlined, ReadOutlined, CheckCircleOutlined, 
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, theme, Avatar, Image } from 'antd';
import ProjectProfile from '../projectprofile/projectprofile';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import '../../index.css';
import CustomerProfile from '../customerprofile/customerprofile';
import ronbowLogo from '../../images/ronbow.png';
import CalendarComponent from '../calendar/calendar';
import Chat from '../chat/chat';
import Zoom from '../zoom/zoom';
import AddShortcut from '../addshortcut/addshortcut';
import KnowledgeBase from '../knowledgebase/knowledgebase';
import Dashboard from '../dashboard/dashboard';



// ref: https://stackblitz.com/edit/react-jy9ujl?file=index.js,demo.js,index.html
// ref: https://stackblitz.com/run?file=demo.js

const { Header, Content, Sider } = Layout;

const featureList = [
  {key: '1', icon: <HomeOutlined/>, label: 'Homepage'},
  {key: '2', icon: <AntDesignOutlined/>, label: 'Design Studio'},
  {key: '3', icon: <CommentOutlined/>, label: 'Chat'},
  {key: '4', icon: <VideoCameraOutlined />, label: 'Zoom'},
  {key: '5', icon: <PlusSquareOutlined />, label: 'Add Shortcut', iconStyle: {bottom: '10%', position: 'absolute', }}, 

];





const Homepage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState("");
  const [selectedKey, setSelectedKey] = useState('1');
  const navigate = useNavigate();

  
  const handleClickNavigation = () => {
    switch(showContent) {
      case 'calendar':
        return <CalendarComponent />;
      case 'project-profile':
        return <ProjectProfile />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'dashboard':
        return <Dashboard />
      default:
        return <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          maxHeight: 500,
          width: 'auto', 
          height: 'auto',
          // maxWidth: '100%',
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
      ></Content>
    }
  }


  const handleItemClick = key => {
    setSelectedKey(key);
  
    // Define the paths for each key
    const paths = {
      '1': '/',
      '2': 'https://designstudio.ronbow.com/',
      '3': '/chat',
      '4': '/zoom',
      '5': '/add-shortcut',
    };
  
    // Open a new tab with the path corresponding to the clicked item
    if (key === '2') {
      window.open(paths[key], '_blank');
    } else if (key === '1') {
      navigate(paths[key]);
    } else {
      window.open(window.location.origin + paths[key], '_blank');
    }
  };
  


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh', }}>

      <Sider collapsible collapsed={collapsed} 
            theme='light'
            onCollapse={value => setCollapsed(value)}
            style={{ marginTop: '50px', backgroundColor: 'white', }}      
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '150vh', }}>
          
          <Menu
            mode="inline"
            onClick={({ key }) => handleItemClick(key)}
            style={{ flex: 1, }}
          >
            {featureList.slice(0, -1).map((item, index) => {
              if (index === 0) {
                return (
                  <Menu.Item key="1">
                    <Image
                      preview={false}
                      sizes={'500%'}
                      src="https://assets.wfcdn.com/im/29929773/resize-h110-w290%5Ecompr-r85/2228/222857539/default_name.jpg"
                      alt="Home"
                      onClick={() => navigate("/")} // using useNavigate hook for navigation
                    />
                  </Menu.Item>

                )
              } else {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                  </Menu.Item>
                )
              }
            })}
          </Menu>

          <Menu
            mode="inline"
            onClick={({ key }) => handleItemClick(key)}
            style={{  borderTop: '2px solid #333' }}
          >
            {featureList.slice(-1).map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </div>

      </Sider>

      {/* inner Layout starts here */}
      <Layout style={{ padding: '0 5px 24px', backgroundColor: 'white', }} >
        <Header className="site-layout-background custom-header" 
                style={{ padding: 0, backgroundColor: 'white', }}>

          {/* Navigation on Header starts here */}
          <div className="logo" />
          <Menu mode='horizontal' >
            <Menu.Item key='1' icon={<CheckCircleOutlined />} onClick={() => setShowContent('dashboard')} style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            
            <Menu.Item 
              key="2" 
              icon={<UserOutlined />} 
              onClick={() => setShowContent('project-profile')} 
              style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Project Profile</Link>
            </Menu.Item>

            <Menu.Item key='3' icon={<ReadOutlined />} onClick={() => setShowContent('knowledge-base')} style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Knowledge Base</Link>
            </Menu.Item>
              
            <Menu.Item 
              key="4" 
              icon={<ScheduleOutlined />} 
              onClick={() => setShowContent('calendar')}
              style={{ fontWeight: '200', color: 'black', }}
            >
              <Link to="/">Calendar</Link>
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
            width: 'auto', 
            height: 'auto',
            // maxWidth: '100%',
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

        
          <Routes>
            <Route path="/" component={Homepage}></Route>
            <Route path="https://www.coohom.com/"></Route>
            <Route path="/chat" element={ <Chat /> }></Route>
            <Route path="/zoom" element={ <Zoom /> }></Route>
            <Route path="/add-shortcut" element={ <AddShortcut /> }></Route>

          </Routes>
        
          
        </Content>
        {/* Main Content ends here */}

      </Layout>
      {/* inner Layout ends here */}

    </Layout>
  );
};
export default Homepage;
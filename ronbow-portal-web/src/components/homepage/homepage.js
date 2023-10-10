import React, { useState } from 'react';
import {
  HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined, 
  DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined,
  UserOutlined, ToolOutlined, BookOutlined, CustomerServiceOutlined, 
  VideoCameraOutlined, PlusSquareOutlined, ReadOutlined, CheckCircleOutlined, 
  FundProjectionScreenOutlined, BulbOutlined, SolutionOutlined, 
} from '@ant-design/icons';
import { Dropdown, Layout, Menu, theme, Avatar, Image, Input } from 'antd';
import ProjectProfile from '../projectprofile/projectprofile';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import '../../index.css';
import CustomerProfile from '../customerprofile/customerprofile';
// import CalendarComponent from '../calendar/calendar';
import Chat from '../chat/chat';
import Zoom from '../zoom/zoom';
import AddShortcut from '../addshortcut/addshortcut';
import KnowledgeBase from '../knowledgebase/knowledgebase';
import Dashboard from '../dashboard/dashboard';
// import Commission from '../humanresource/commission/commission';
import InspirationSpace from '../inspiration/inspiration';
import HumanResource from '../humanresource/humanresource';
import MyAccount from '../myaccount/myaccount';
import ProjectList from '../projectprofile/projectlist/projectlist';



// ref: https://stackblitz.com/edit/react-jy9ujl?file=index.js,demo.js,index.html
// ref: https://stackblitz.com/run?file=demo.js

const { Header, Content, Sider } = Layout;
const { Search } = Input;


const featureList = [
  {key: '1', icon: <HomeOutlined/>, label: 'Homepage'},
  {key: '2', icon: <ToolOutlined/>, label: 'Design Studio'},
  {key: '3', icon: <CommentOutlined/>, label: 'Chat'},
  {key: '4', icon: <VideoCameraOutlined />, label: 'Zoom'},
  {key: '5', icon: <ScheduleOutlined />, label: 'Calendar'}, 
  {key: '6', icon: <PlusSquareOutlined />, label: 'Add Shortcut', iconStyle: {bottom: '10%', position: 'absolute', }}, 

];




const Homepage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState("");
  const [selectedKey, setSelectedKey] = useState('1');
  const navigate = useNavigate();


  const handleSearch = (value) => {
    console.log('Search:', value);
    // Implement search functionality here
  };

  
  const handleClickNavigation = () => {
    switch(showContent) {
      // case 'calendar':
      //   return <CalendarComponent />;
      case 'project-profile':
        return <ProjectList />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      case 'dashboard':
        return <Dashboard />
      // case 'commission':
      //   return <Commission />
      case 'inspiration-space':
        return <InspirationSpace />
      case 'human-resource':
        return <HumanResource />
      case 'my-account':
        return <MyAccount />
      default:
        return 
    }
  }


  const handleItemClick = key => {
    setSelectedKey(key);
    
    const paths = {
      '1': '/',
      '2': 'https://designstudio.ronbow.com/',
      '3': '/chat',
      '4': '/zoom',
      '5': 'https://calendar.google.com/calendar/',
      '6': '/add-shortcut',
    };
    
    if (key === 'logo') {
      setShowContent(''); // Clear the current content
      setSelectedKey(null); // Clear all selections
      navigate('/'); // Navigate to the homepage
    } else if (key === '2' || key === '5') {
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
    <Layout style={{ minHeight: '100vh', backgroundColor: 'white', }}>
        

      <Sider collapsible collapsed={collapsed} 
            theme='light'
            onCollapse={value => setCollapsed(value)}
            style={{ marginTop: '50px', backgroundColor: 'white', }}      
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '85vh', }}>
          
          <Menu
            mode="inline"
            onClick={({ key }) => handleItemClick(key)}
            style={{ flex: 1, }}
          >
            {featureList.slice(0, -1).map((item, index) => {
              if (index === 0) {
                return (
                  <Menu.Item key="logo">
                    <Image
                      preview={false}
                      width={'auto'} // Adjust width as needed
                      src="https://assets.wfcdn.com/im/29929773/resize-h110-w290%5Ecompr-r85/2228/222857539/default_name.jpg"
                      alt="Home"
                      onClick={() => handleItemClick('logo')}
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

            <Menu.Item key='1' icon={<ProjectOutlined />} onClick={() => setShowContent('dashboard')} style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
                          
              {/* <Menu.Item 
                key="2" 
                icon={<ScheduleOutlined />} 
                onClick={() => setShowContent('calendar')}
                style={{ fontWeight: '200', color: 'black', }}
              >
                <Link to="/">Calendar</Link>
              </Menu.Item> */}

            <Menu.Item 
              key="2" 
              icon={<FundProjectionScreenOutlined />} 
              onClick={() => setShowContent('project-profile')} 
              style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Projects</Link>
            </Menu.Item>

            <Menu.Item key='3' icon={<ReadOutlined />} onClick={() => setShowContent('knowledge-base')} style={{ fontWeight: '200',  color: 'black', }}>
              <Link to="/">Knowledge Base</Link>
            </Menu.Item>

            {/* <Menu.Item 
              key="4" 
              icon={<DollarOutlined />} 
              onClick={() => setShowContent('commission')}
              style={{ fontWeight: '200', color: 'black', }}
            >
              <Link to="/">Commission</Link>
            </Menu.Item> */}

            <Menu.Item 
              key="4" 
              icon={<BulbOutlined />} 
              onClick={() => setShowContent('inspiration-space')}
              style={{ fontWeight: '200', color: 'black', }}
            >
              <Link to="/">Inspiration Space</Link>
            </Menu.Item>

            <Menu.Item 
              key="5" 
              icon={<SolutionOutlined />} 
              onClick={() => setShowContent('human-resource')}
              style={{ fontWeight: '200', color: 'black', }}
            >
              <Link to="/">HR</Link>
            </Menu.Item>

            <Menu.Item 
              key="6" 
              icon={<UserOutlined />} 
              onClick={() => setShowContent('my-account')}
              style={{ fontWeight: '200', color: 'black', }}
            >
              <Link to="/">My Account</Link>
            </Menu.Item>

          </Menu>

          {/* Search Bar starts here */}
          <Search
            placeholder="Search..."
            onSearch={handleSearch()}
            style={{
              width: 200,
            }}
          />
          {/* Search Bar ends here */}

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
            <Route path="https://calendar.google.com/calendar/"></Route>
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
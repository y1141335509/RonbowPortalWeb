import React, { useState } from 'react';
import { Layout, Menu, Input, ConfigProvider, Image } from 'antd';
import {
    HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined, 
    DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined, SettingOutlined, 
    UserOutlined, ToolOutlined, BookOutlined, CustomerServiceOutlined, ExportOutlined, 
    VideoCameraOutlined, PlusSquareOutlined, ReadOutlined, CheckCircleOutlined, 
    FundProjectionScreenOutlined, BulbOutlined, SolutionOutlined, FormOutlined, TableOutlined
  } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import MyAccount from '../../myaccount/myaccount';
import InspirationSpace from '../../inspiration/inspiration';
import HumanResource from '../../humanresource/humanresource';
import Dashboard from '../../../components/dashboard/dashboard';
import KnowledgeBase from '../../Resource/Resources';
import ProjectList from '../../../components/projectlist/projectlist';
import AddShortcutModal from '../addshortcuts/addshortcuts';



const { Header, Content, Sider } = Layout;
const { Search } = Input;

const defaultShortcuts = [
  {key: '1', icon: <HomeOutlined/>, label: 'Homepage', path: '/'},
  {key: '2', icon: <FormOutlined />, label: 'Design Studio', path: 'https://designstudio.ronbow.com/'},
  {key: '3', icon: <CommentOutlined/>, label: 'Chat', path: '/chat'},
  {key: '4', icon: <VideoCameraOutlined />, label: 'Zoom', path: '/zoom'},
  {key: '5', icon: <ScheduleOutlined />, label: 'Calendar', path: 'https://calendar.google.com/calendar/'}, 
  {key: '6', icon: <TableOutlined />, label: 'Clickup Form', path: 'https://app.clickup.com/10643463/v/fm/a4u07-7291'}, 
  {key: '7', icon: <PlusSquareOutlined />, label: 'Add Shortcut', path: '/add-shortcut'}, 
];

const allShortcuts = [
    {key: '1', icon: <HomeOutlined/>, label: 'Homepage'},
    {key: '2', icon: <FormOutlined />, label: 'Design Studio'},
    {key: '3', icon: <CommentOutlined/>, label: 'Chat'},
    {key: '4', icon: <VideoCameraOutlined />, label: 'Zoom'},
    {key: '5', icon: <ScheduleOutlined />, label: 'Calendar'}, 
    {key: '6', icon: <TableOutlined />, label: 'Clickup Form'}, 
    {key: '7', icon: <PlusSquareOutlined />, label: 'Add Shortcut', iconStyle: {bottom: '10%', position: 'absolute', }}, 
    {key: '8', icon: <ExportOutlined />, label: 'Export'}, 
    {key: '9', icon: <ToolOutlined />, label: 'Tool'}, 
    {key: '10', icon: <SettingOutlined />, label: 'Settings'}, 
  ];



const LayoutComponent = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [showContent, setShowContent] = useState("dashboard");
    const [selectedKey, setSelectedKey] = useState('1');
    const navigate = useNavigate();
    const [isAddShortcutVisible, setIsAddShortcutVisible] = useState(false);
    const [shortcuts, setShortcuts] = useState(defaultShortcuts);


    const handleItemClick = key => {
      setSelectedKey(key);
      
      const paths = {
        '1': '/',
        '2': 'https://designstudio.ronbow.com/',
        '3': 'https://www.zoom.com/en/products/team-chat/',
        '4': 'https://zoom.us/meeting',
        '5': 'https://calendar.google.com/calendar/',
        '6': 'https://app.clickup.com/10643463/v/fm/a4u07-7291',
        '7': '/add-shortcut',
      };
      
      if (key === 'logo') {
        setShowContent('dashboard'); // Clear the current content
        setSelectedKey(null); // Clear all selections
        navigate('/'); // Navigate to the homepage
      } else if (2 <= parseInt(key) <= 6) {
        window.open(paths[key], '_blank');
      } else if (key === '1') {
        navigate(paths[key]);
      } else {
        window.open(window.location.origin + paths[key], '_blank');
      }
    };

  const handleSearch = (value) => {
    console.log('Search:', value);
    // Implement search functionality here
  };

  const handleSaveShortcut = (newShortcuts) => {
    setShortcuts(prevShortcuts => [...prevShortcuts, ...newShortcuts]);
  };

    
  // This function defines how to render the inner content component
  const renderContent = () => {
    switch(showContent) {
      case 'project-list':
        return <ProjectList />;
      case 'resources':
        return <KnowledgeBase />;
      case 'dashboard':
        return <Dashboard />
      case 'inspiration-space':
        return <InspirationSpace />
      case 'human-resource':
        return <HumanResource />
      case 'my-account':
        return <MyAccount />
      default:
        return null;
    }
  }


  return (
    <ConfigProvider
      theme={{token: {
        colorPrimary: '#5D6465', colorSuccess: '#F0ECEC',
      }}}
    >
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
              {defaultShortcuts.slice(0, -1).map((item, index) => {
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
              {defaultShortcuts.slice(-1).map(item => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
              
          </div>

        </Sider>

        {/* Main Content */}
        <Layout style={{ padding: '0 5px 24px', backgroundColor: 'white' }}>
            {/* Top Navigation Header */}
            <Header className="site-layout-background custom-header" style={{ padding: 0, backgroundColor: 'white' }}>
            <Menu mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item 
                    key='1' icon={<ProjectOutlined />} 
                    onClick={() => setShowContent('dashboard')} 
                    style={{ fontWeight: '200',  color: 'black', }}>
                    <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                                
                    <Menu.Item 
                    key="2" 
                    icon={<FundProjectionScreenOutlined />} 
                    onClick={() => setShowContent('project-list')} 
                    style={{ fontWeight: '200',  color: 'black', }}>
                    <Link to="/project-lsit">Projects</Link>
                    </Menu.Item>

                    <Menu.Item key='3' icon={<ReadOutlined />} onClick={() => setShowContent('resources')} style={{ fontWeight: '200',  color: 'black', }}>
                    <Link to="/resources">Resources</Link>
                    </Menu.Item>

                    <Menu.Item 
                    key="4" 
                    icon={<BulbOutlined />} 
                    onClick={() => setShowContent('inspiration-space')}
                    style={{ fontWeight: '200', color: 'black', }}
                    >
                    <Link to="/inspiration-space">Inspiration</Link>
                    </Menu.Item>

                    <Menu.Item 
                    key="5" 
                    icon={<SolutionOutlined />} 
                    onClick={() => setShowContent('human-resource')}
                    style={{ fontWeight: '200', color: 'black', }}
                    >
                    <Link to="/human-resource">HR</Link>
                    </Menu.Item>

                    <Menu.Item 
                    key="6" 
                    icon={<UserOutlined />} 
                    onClick={() => setShowContent('my-account')}
                    style={{ fontWeight: '200', color: 'black', marginRight: '30px' }}
                    >
                    <Link to="/my-account">My Account</Link>
                    </Menu.Item>
            </Menu>

            {/* Search Bar */}
            <Search
                placeholder="Search..."
                onSearch={handleSearch}
                style={{ width: 200 }}
            />
            </Header>

            {/* Page Content */}
            <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                backgroundColor: 'white',
            }}
            >
            {/* {children} */}
            {renderContent() }

            </Content>
        </Layout>

        <AddShortcutModal
          isVisible={isAddShortcutVisible}
          onClose={() => setIsAddShortcutVisible(false)}
          onSave={handleSaveShortcut}
        />
        </Layout>
    
    </ConfigProvider>
  );
};

export default LayoutComponent;

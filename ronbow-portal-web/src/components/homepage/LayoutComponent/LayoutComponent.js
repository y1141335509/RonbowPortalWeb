import React, { useState } from 'react';
import { Layout, Menu, Input, ConfigProvider } from 'antd';
import {
    HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined, 
    DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined, SettingOutlined, 
    UserOutlined, ToolOutlined, BookOutlined, CustomerServiceOutlined, ExportOutlined, 
    VideoCameraOutlined, PlusSquareOutlined, ReadOutlined, CheckCircleOutlined, 
    FundProjectionScreenOutlined, BulbOutlined, SolutionOutlined, FormOutlined, TableOutlined
  } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';



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



const LayoutComponent = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [showContent, setShowContent] = useState("dashboard");
    const [selectedKey, setSelectedKey] = useState('1');
    const navigate = useNavigate();
    const [isAddShortcutVisible, setIsAddShortcutVisible] = useState(false);
    const [shortcuts, setShortcuts] = useState(defaultShortcuts);


  const handleItemClick = (key, path) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  const handleSearch = (value) => {
    console.log('Search:', value);
    // Implement search functionality here
  };

  return (
    <ConfigProvider
      theme={{token: {
        colorPrimary: '#5D6465', colorSuccess: '#F0ECEC',
      }}}
    >
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Sider Menu */}
            <Sider collapsible collapsed={collapsed} 
                theme='light'
                onCollapse={value => setCollapsed(value)}
                style={{ marginTop: '50px', backgroundColor: 'white', }}      
            >        
                <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
                {defaultShortcuts.map((item) => (
                <Menu.Item key={item.key} icon={item.icon} onClick={() => handleItemClick(item.key, item.path)}>
                {item.label}
                </Menu.Item>
            ))}
            </Menu>
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
                    <Link to="/">Dashboard</Link>
                    </Menu.Item>
                                
                    <Menu.Item 
                    key="2" 
                    icon={<FundProjectionScreenOutlined />} 
                    onClick={() => setShowContent('project-list')} 
                    style={{ fontWeight: '200',  color: 'black', }}>
                    <Link to="/">Projects</Link>
                    </Menu.Item>

                    <Menu.Item key='3' icon={<ReadOutlined />} onClick={() => setShowContent('resources')} style={{ fontWeight: '200',  color: 'black', }}>
                    <Link to="/">Resources</Link>
                    </Menu.Item>

                    <Menu.Item 
                    key="4" 
                    icon={<BulbOutlined />} 
                    onClick={() => setShowContent('inspiration-space')}
                    style={{ fontWeight: '200', color: 'black', }}
                    >
                    <Link to="/">Inspiration</Link>
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
                    style={{ fontWeight: '200', color: 'black', marginRight: '30px' }}
                    >
                    <Link to="/">My Account</Link>
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
            {children}
            </Content>
        </Layout>
        </Layout>
    
    </ConfigProvider>
  );
};

export default LayoutComponent;

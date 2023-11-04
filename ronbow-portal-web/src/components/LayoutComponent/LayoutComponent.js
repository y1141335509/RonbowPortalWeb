import React, { useState, useCallback } from 'react';
import { Layout, Menu, Input, ConfigProvider, Image } from 'antd';
import {
  HomeOutlined, ScheduleOutlined, ContactsOutlined, ProjectOutlined,
  DollarOutlined, FireOutlined, AntDesignOutlined, CommentOutlined, SettingOutlined,
  UserOutlined, ToolOutlined, BookOutlined, CustomerServiceOutlined, ExportOutlined,
  VideoCameraOutlined, PlusSquareOutlined, ReadOutlined, CheckCircleOutlined,
  FundProjectionScreenOutlined, BulbOutlined, SolutionOutlined, FormOutlined,
  TableOutlined, PhoneOutlined, LogoutOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import AddShortcut from '../AddShortcut/AddShortcut';




const { Header, Content, Sider } = Layout;
const { Search } = Input;

const allShortcuts = [
  { key: '1', icon: <HomeOutlined />, label: 'Homepage', path: '/' },
  { key: '2', icon: <FormOutlined />, label: 'Design Studio', path: 'https://designstudio.ronbow.com/' },
  { key: '3', icon: <CommentOutlined />, label: 'Chat', path: 'https://www.zoom.com/en/products/team-chat/', },
  { key: '4', icon: <VideoCameraOutlined />, label: 'Zoom', path: 'https://zoom.us/meeting', },
  { key: '5', icon: <ScheduleOutlined />, label: 'Calendar', path: 'https://calendar.google.com/calendar/' },
  { key: '6', icon: <TableOutlined />, label: 'Clickup Form', path: 'https://app.clickup.com/10643463/v/fm/a4u07-7291' },
  { key: '7', icon: <ExportOutlined />, label: 'Export' },
  { key: '8', icon: <ToolOutlined />, label: 'Tool' },
  { key: '9', icon: <SettingOutlined />, label: 'Settings' },
  { key: '10', icon: <PlusSquareOutlined />, label: 'Add Shortcut', iconStyle: { bottom: '10%', position: 'absolute', } },

];


const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState("dashboard");
  const [selectedKey, setSelectedKey] = useState('1');
  const [shortcuts, setShortcuts] = useState(allShortcuts);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const navigate = useNavigate();


  const handleShortcutSave = (selectedShortcutKeys) => {
    console.log('Selected Shortcut Objects:', selectedShortcutKeys);

    const selectedKeys = selectedShortcutKeys.map(shortcut => shortcut.key);
    console.log('Selected Shortcut Keys:', selectedKeys);

    const newShortcuts = allShortcuts
      .filter((shortcut) => selectedKeys.includes(shortcut.key))
      .map((shortcut) => allShortcuts.find((s) => s.key === shortcut.key) || shortcut);

    console.log('New Shortcuts:', newShortcuts);
    setShortcuts(newShortcuts);
    setIsModalVisible(isModalVisible);
  };





  const renderMenuItems = (items) => (
    <Menu mode="inline" selectedKeys={[selectedKey]} onClick={({ key }) => handleItemClick(key)}>
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} disabled={isModalVisible && shortcuts.some(s => s.key === item.key)}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleItemClick = useCallback((key) => {
    setSelectedKey(key);

    if (key === '10') {
      setIsModalVisible(true);
      return;
    }

    const path = shortcuts.find((s) => s.key === key)?.path;
    if (!path) return;

    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  }, [navigate, shortcuts]);


  const handleSearch = (value) => {
    console.log('Search:', value);
    // Implement search functionality here
  };





  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465', colorSuccess: '#F0ECEC',
        }
      }}
    >
      <Layout style={{ minHeight: '100vh', backgroundColor: 'white', }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme='light' style={{ marginTop: '50px', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '85vh' }}>
            {renderMenuItems(shortcuts.slice(0, -1))}
            <div style={{ borderTop: '2px solid #333' }}>{renderMenuItems(shortcuts.slice(-1))}</div>
          </div>
        </Sider>

        {/* Main Content */}
        <Layout style={{ padding: '0 5px 24px', backgroundColor: 'white' }}>
          {/* Top Navigation Header */}
          <Header className="site-layout-background custom-header"
            style={{ padding: 0, backgroundColor: 'white', }}>
            <Menu mode='horizontal' defaultSelectedKeys={['1']} style={{ float: 'right', }}>
              <Menu.Item
                key='1' icon={<ProjectOutlined />}
                onClick={() => setShowContent('dashboard')}
                style={{ fontWeight: '200', color: 'black', }}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>

              <Menu.Item
                key="2"
                icon={<PhoneOutlined />}
                onClick={() => setShowContent('leads')}
                style={{ fontWeight: '200', color: 'black' }}
              >
                <Link to="/leads">Leads</Link>
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<FundProjectionScreenOutlined />}
                onClick={() => setShowContent('project-list')}
                style={{ fontWeight: '200', color: 'black', }}>
                <Link to="/project-list">Projects</Link>
              </Menu.Item>

              <Menu.Item key='4' icon={<ReadOutlined />} onClick={() => setShowContent('resources')} style={{ fontWeight: '200', color: 'black', }}>
                <Link to="/resources">Resources</Link>
              </Menu.Item>

              <Menu.Item
                key="5"
                icon={<BulbOutlined />}
                onClick={() => setShowContent('inspiration-space')}
                style={{ fontWeight: '200', color: 'black', }}
              >
                <Link to="/inspiration-space">Inspiration</Link>
              </Menu.Item>

              <Menu.Item
                key="6"
                icon={<HomeOutlined />}
                onClick={() => setShowContent('requests')}
                style={{ fontWeight: '200', color: 'black', }}
              >
                <Link to="/requests">Requests</Link>
              </Menu.Item>

              <Menu.Item
                key="7"
                icon={<UserOutlined />}
                onClick={() => setShowContent('my-account')}
                style={{ fontWeight: '200', color: 'black', }}
              >
                <Link to="/my-account">My Account</Link>
              </Menu.Item>

              <Menu.Item
                key="8"
                icon={<LogoutOutlined />}
                onClick={() => setShowContent('login')}
                style={{ fontWeight: '200', color: 'black', marginRight: '15px', }}
              >
                <Link to="/login">Logout</Link>
              </Menu.Item>

              <Menu.Item>
                <Search
                  placeholder="Search..."
                  onSearch={handleSearch}
                  style={{ width: 200, marginLeft: '50px', marginTop: '17px', }}
                />
              </Menu.Item>
            </Menu>


          </Header>

          {/* Page Content */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            {children}

          </Content>


          <AddShortcut
            visible={isModalVisible}
            allShortcuts={allShortcuts}
            selectedShortcuts={shortcuts.map((s) => s.key)}
            onSave={handleShortcutSave}
            onCancel={() => setIsModalVisible(false)}
            open={true}
          />

        </Layout>


      </Layout>

    </ConfigProvider>
  );
};

export default LayoutComponent;

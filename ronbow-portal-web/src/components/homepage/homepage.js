import React from 'react';
import * as ICONS from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Sider } = Layout;

const featureList = ['Homepage', 'Schedule', 'Contact Info', 'Project Info', 
                    'Sales Target', 'Commission', 'Design Tool', 'Communication',
                    'Profile', 'Useful tools', 'Training Materials', 'Internal Contact',
                    'News', 'Notification'].map((key, index) => ({
  key,
  index: index,
}));


const items2 = [
  ICONS.HomeOutlined, ICONS.ScheduleOutlined, ICONS.ContactsOutlined, ICONS.ProjectOutlined,
  ICONS.DollarOutlined, ICONS.FireOutlined, ICONS.AntDesignOutlined, ICONS.CommentOutlined,
  ICONS.UserOutlined, ICONS.ToolOutlined, ICONS.BookOutlined, ICONS.ContactsOutlined, 
  ICONS.NotificationOutlined, ICONS.MessageOutlined,
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: featureList[index].key,
  };
});


const Homepage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items2} />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content PLACEHOLDER
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Homepage;
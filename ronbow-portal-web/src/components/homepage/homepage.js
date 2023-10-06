import React from 'react';
import * as ICONS from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Sider } = Layout;

const featureList = ['Homepage', 'Schedule', 'Contact Info', 'Project Info', 
                    'Sales Target', 'Commission', 'Design Tool', 'Communication',
                    'Profile', 'Useful tools', 'Training Materials', 'Internal Contact',
                    'News', 'Notification'].map((key) => ({
  key,
  label: `nav ${key}`,
}));



let data = [
  {id: 1, feature: 'Homepage', icon: ICONS.HomeOutlined},
  {id: 2, feature: 'Schedule', icon: ICONS.ScheduleOutlined},
];

let dictionary = Object.assign({}, ...data.map((x) => ({[x.id]: x.country})));



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
    label: `${key}`,
    // add children here
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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={featureList} />
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
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Homepage;
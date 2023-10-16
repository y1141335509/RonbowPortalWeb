import React, { useState } from 'react';
import {
  HomeOutlined, FormOutlined, CommentOutlined, VideoCameraOutlined,
  ScheduleOutlined, TableOutlined, PlusSquareOutlined, ExportOutlined,
  ToolOutlined, SettingOutlined, ProjectOutlined, FundProjectionScreenOutlined,
  ReadOutlined, BulbOutlined, SolutionOutlined, UserOutlined
} from '@ant-design/icons';
import {
  Dropdown, Layout, Menu, Avatar, Image, Input, ConfigProvider
} from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Components
import ProjectList from '../projectlist/projectlist';
import KnowledgeBase from '../Resource/Resources';
import Dashboard from '../dashboard/dashboard';
import InspirationSpace from '../inspiration/inspiration';
import HumanResource from '../humanresource/humanresource';
import MyAccount from '../myaccount/myaccount';
import AddShortcutModal from './addshortcuts/addshortcuts'; 

// Styles
import './homepage.css';
import '../../index.css';


import LayoutComponent from './LayoutComponent/LayoutComponent';



const defaultShortcuts = [
  {key: '1', icon: <HomeOutlined/>, label: 'Homepage'},
  {key: '2', icon: <FormOutlined />, label: 'Design Studio'},
  {key: '3', icon: <CommentOutlined/>, label: 'Chat'},
  {key: '4', icon: <VideoCameraOutlined />, label: 'Zoom'},
  {key: '5', icon: <ScheduleOutlined />, label: 'Calendar'}, 
  {key: '6', icon: <TableOutlined />, label: 'Clickup Form'}, 
  {key: '7', icon: <PlusSquareOutlined />, label: 'Add Shortcut', iconStyle: {bottom: '10%', position: 'absolute', }}, 

];

const additionalShortcuts = [
  { key: '8', icon: <ExportOutlined />, label: 'Export' },
  { key: '9', icon: <ToolOutlined />, label: 'Tool' },
  { key: '10', icon: <SettingOutlined />, label: 'Settings' },
];



const Homepage = () => {
  // const navigate = useNavigate();
  // const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState("dashboard");
  // const [isAddShortcutVisible, setIsAddShortcutVisible] = useState(false);
  // const [shortcuts, setShortcuts] = useState(defaultShortcuts);
  // const [selectedKey, setSelectedKey] = useState('')


  
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
    
    <ConfigProvider theme={{ token: { colorPrimary: '#5D6465', colorSuccess: '#F0ECEC' } }}>
      <LayoutComponent>
        {renderContent() }
      </LayoutComponent>
    </ConfigProvider>

  );
};
export default Homepage;








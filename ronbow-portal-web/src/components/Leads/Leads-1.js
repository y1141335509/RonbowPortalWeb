import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined, DownOutlined, SearchOutlined, FilterOutlined, } from '@ant-design/icons';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, Tag, Divider, Select, ConfigProvider, Menu, Dropdown, message, } from 'antd';
import ImportDropdown from './ImportDropdown/ImportDropdown';
import ProjectQuality from './ProjectQuality/ProjectQuality';
import AddLead from './AddLead/AddLead';
import AddableProjectsColumn from './AddableProjectsColumn/AddableProjectsColumn';




const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};





const EditableTable = () => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  const [data, setData] = useState([
    {
      id: 624748505,
      customer_id: 'ABC123',
      name: 'Henry',
      leads_from: <Tag>Walk In</Tag>,
      trade_pro: 'Pro 1',
      leads_quality: 'Style Mismatch',  // Default value for the first row
      projects: ['Kitchen', 'Bath',], // Initial values set here as an array
      phone: '123-456-7890',
      email: 'hen123@gmail.com',
    },
    {
      id: 624691230,
      customer_id: 'BCD234',
      name: 'Jeff',
      leads_from: <Tag>Trade Pro</Tag>,
      trade_pro: 'Pro 2',
      leads_quality: 'Great',  // Default value for the second row
      projects: ['Kitchen'], // Initial value set here as an array
      phone: '123-456-0987',
      email: 'jeff123@hotmail.com',
    },
    {
      id: 624693456,
      customer_id: 'DEF345',
      name: 'Diana',
      leads_from: <Tag>Website</Tag>,
      trade_pro: 'Pro 3',
      leads_quality: 'Low Budget',  // Default value for the second row
      projects: ['Bath'], // Initial value set here as an array
      phone: '345-456-0987',
      email: 'diana222@outlook.com',
    },
  ]);




  const handleMenuClick = (record, e) => {

    // Update the data state to reflect the menu selection
    const newData = data.map((item) => {
      if (item.id === record.id) {
        return { ...item, leads_quality: e.domEvent.currentTarget.textContent };
      }
      return item;
    });

    setData(newData);
  };


  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customer_id',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '13%',
    },
    {
      title: 'Leads From',
      dataIndex: 'leads_from',
      width: '15%',
    },
    {
      title: 'Projects',
      dataIndex: 'projects',
      // render: (_, record) => <AddableProjectsColumn />,
      render: (_, record) => <ProjectQuality initialProjects={record.projects} />,
      width: '30%',
    },
    {
      title: 'Trade Pro',
      dataIndex: 'trade_pro',
      width: '10%',
    },
    {
      title: 'Leads Quality',
      dataIndex: 'leads_quality',
      width: '15%',
      render: (text, record) => {
        const items = [
          {
            label: 'Great',
            key: '1',
          },
          {
            label: 'Style Mismatch',
            key: '2',
          },
          {
            label: 'Low Budget',
            key: '3',
          },
        ];

        const menu = (
          <Menu onClick={(e) => handleMenuClick(record, e)} items={items} />
        );

        return (
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                {text || 'Select Quality'} <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        );
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: '15%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '15%',
    },

  ];



  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465', colorSuccess: '#F0ECEC', colorDefault: '#bae637',
        }
      }}
    >

      <div className="header">
        <p style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '18px',
          fontWeight: "400",
          lineHeight: "14px",
          letterSpacing: "0.02em",
          textAlign: "left"
        }}>
        </p>
        <div style={{ marginRight: '50px', }}>
          <FilterOutlined className="icon" />
          <SearchOutlined className="icon" />
        </div>
      </div>

      <div style={{ textAlign: 'center', }}>
        <EditableProTable
          rowKey="id"
          scroll={{
            x: 960,
          }}
          actionRef={actionRef}
          headerTitle=""
          maxLength={5}
          recordCreatorProps={false}
          columns={columns}
          request={async () => ({
            data: data,
            total: 3,
            success: true,
          })}
          value={data}
          onChange={setData}
          editable={{
            form,
            editableKeys,
            onSave: async () => {
              await waitTime(2000);
            },
            onChange: setEditableRowKeys,
            actionRender: (row, config, dom) => [dom.save, dom.cancel],
          }}
        />

        <Divider />

        <div style={{
          display: 'flex',         // Use flex display to align children inline
          justifyContent: 'center', // Center the children horizontally
          alignItems: 'center',     // Center the children vertically (if they have different heights)
          gap: '16px',             // Optional: define gap between children
        }}>
          <AddLead style={{ float: 'left', }} />
          <ImportDropdown style={{ float: 'right', }} />
        </div>

      </div>
    </ConfigProvider>

  );
};

export default EditableTable;










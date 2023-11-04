import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined, DownOutlined, } from '@ant-design/icons';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, Tag, Divider, Select, ConfigProvider, Menu, Dropdown, message, } from 'antd';
import ImportDropdown from './ImportDropdown/ImportDropdown';
import ProjectQuality from './ProjectQuality/ProjectQuality';
import AddProject from './AddLead/AddProject';




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
      id: 624748504,
      name: 'Henry',
      leads_from: <Tag>Walk In</Tag>,
      leads_quality: 'Style Mismatch',  // Default value for the first row
      projects: ['Kitchen', 'Bath'], // Initial values set here as an array
      phone: '123-456-7890',
      email: 'hen123@gmail.com',
    },
    {
      id: 624691230,
      name: 'Jeff',
      leads_from: <Tag>Trade Pro</Tag>,
      leads_quality: 'Great',  // Default value for the second row
      projects: ['Kitchen'], // Initial value set here as an array
      phone: '123-456-0987',
      email: 'jeff123@hotmail.com',
    },
    {
      id: 624693456,
      name: 'Diana',
      leads_from: <Tag>Website</Tag>,
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
      dataIndex: 'id',
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
      render: (_, record) => <ProjectQuality initialProjects={record.projects} />,
    },    
    {
      title: 'Leads Quality',
      dataIndex: 'leads_quality',
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
      <ImportDropdown />

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

        <AddProject />

      </div>
    </ConfigProvider>

  );
};

export default EditableTable;










import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined, DownOutlined, } from '@ant-design/icons';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, Tag, Divider, Select, ConfigProvider, Menu, Dropdown, message, } from 'antd';


const { Option } = Select;


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
      contact_name: 'Henry',
      address: '19479 Stevens Creek Blvd #110, Cupertino, CA 95014',
      leads_from: <Tag>Walk In</Tag>,
      projects: <div><Tag>Kitchen</Tag><Tag>Bath</Tag></div>,
      leads_quality: 'Style Mismatch',  // Default value for the first row
    },
    {
      id: 624691230,
      contact_name: 'Jeff',
      address: '19479 Stevens Creek Blvd #110, Cupertino, CA 95014',
      leads_from: <Tag>Trade Pro</Tag>,
      projects: <div><Tag>Kitchen</Tag></div>,
      leads_quality: 'Great',  // Default value for the second row
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
      title: 'Contact Name',
      dataIndex: 'contact_name',
      width: '13%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '25%',
    },
    {
      title: 'Leads From',
      dataIndex: 'leads_from',
      width: '15%',
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
      title: 'Projects',
      dataIndex: 'projects',
      width: '15%',
    }
  ];


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465', colorSuccess: '#F0ECEC', colorDefault: '#bae637',
        }
      }}
    >
      <div style={{ textAlign: 'center', }}>
        <EditableProTable
          rowKey="id"
          scroll={{
            x: 960,
          }}
          actionRef={actionRef}
          headerTitle="Contact List"
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

      </div>
    </ConfigProvider>

  );
};

export default EditableTable;










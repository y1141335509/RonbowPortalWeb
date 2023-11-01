
import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined } from '@ant-design/icons';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, Tag, Divider, Select, ConfigProvider } from 'antd';
import { Link, Routes, Route } from 'react-router-dom';


const { Option } = Select;


const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const TagList = ({ value, onChange }) => {
  const ref = useRef(null);
  const [newTags, setNewTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let tempsTags = [...(value || [])];
    if (
      inputValue &&
      tempsTags.filter((tag) => tag.label === inputValue).length === 0
    ) {
      tempsTags = [
        ...tempsTags,
        { key: `new-${tempsTags.length}`, label: inputValue },
      ];
    }
    onChange?.(tempsTags);
    setNewTags([]);
    setInputValue('');
  };


  return (
    <Space>
      {(value || []).concat(newTags).map((item) => (
        <Tag key={item.key}>{item.label}</Tag>
      ))}
      <Input
        ref={ref}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    </Space>
  );
};



const defaultData = [
  {
    id: 624748504,
    contact_name: 'Henry',
    address: '19479 Stevens Creek Blvd #110, Cupertino, CA 95014',
    leads_from: <Tag>Walk In</Tag>,
    leads_quality: <Select placeholder="Select Leads Quality" defaultValue={'Low Budget'} style={{ width: '140px' }}>
      <Option value="Great">Great</Option>
      <Option value="Style Mismatch">Style Mismatch</Option>
      <Option value="Low Budget">Low Budget</Option>
    </Select>,
    projects: <div><Tag>Kitchen</Tag><Tag>Bath</Tag></div>,
  },
  {
    id: 624691230,
    contact_name: 'Jeff',
    address: '19479 Stevens Creek Blvd #110, Cupertino, CA 95014',
    leads_from: <Tag>Trade Pro</Tag>,
    leads_quality: <Select placeholder="Select Leads Quality" defaultValue='Great' style={{ width: '140px' }}>
      <Option value="Great" >Great</Option>
      <Option value="Style Mismatch">Style Mismatch</Option>
      <Option value="Low Budget">Low Budget</Option>
    </Select>,
    projects: <div><Tag>Kitchen</Tag></div>,
  },
];


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
    width: '15%',
    valueType: 'select',
    valueEnum: {
      Great: { text: 'Great' },
      'Style Mismatch': { text: 'Style Mismatch' },
      'Low Budget': { text: 'Low Budget' },
    },
    renderFormItem: (item, { defaultRender, ...rest }, form) => {
      return (
        <Select {...rest} placeholder="Select Leads Quality">
          <Option value="Great">Great</Option>
          <Option value="Style Mismatch">Style Mismatch</Option>
          <Option value="Low Budget">Low Budget</Option>
        </Select>
      );
    },
    render: (text) => <Tag>{text}</Tag>
  },
  {
    title: 'Projects',
    dataIndex: 'projects',
    width: '15%',
  }
];


const EditableTable = () => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
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
            data: defaultData,
            total: 3,
            success: true,
          })}
          value={dataSource}
          onChange={setDataSource}
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










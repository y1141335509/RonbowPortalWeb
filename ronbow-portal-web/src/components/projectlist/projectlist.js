
import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined } from '@ant-design/icons';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
import { Button, Form, Input, Space, Tag, Divider, ConfigProvider } from 'antd';
import { Link, Routes, Route } from 'react-router-dom';
// import AddProject from './AddProject/AddProject';
import CurrentOrders from './CurrentOrders/CurrentOrders.js';
import ArchivedOrders from './ArchivedOrders/ArchivedOrders';



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
    title: <div key='1'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/proj/624748504`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>Kevin's Kitchen - Palo Alto</span>
        </Link>
      </span>
    </div>,
    labels: [{ key: 'woman', label: 'Modern' }],
    state: 'open',
    client: <div key='1'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/cust/624748504`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>Kevin</span>
        </Link>
      </span>
    </div>,
    tradePro: 'trade pro 1',
    designer: 'Wendy',
    ETA: 'TBD',
    view_desing: <a href="https://designstudio.ronbow.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#5d6465', textDecoration: 'underline', }}>View Design</a>,
    address: '7150 Patterson Pass Rd # F, Livermore, CA 94550',
    created_at: '2023/10/10',
  },
  {
    id: 624691229,
    title: <div key='2'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/proj/624691229`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>John's Wet Bar - San Mateo</span>
        </Link>
      </span>
    </div>,
    labels: [{ key: 'man', label: 'L-shape' }],
    state: 'default',
    client: <div key='2'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/cust/624691229`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>John</span>
        </Link>
      </span>
    </div>,
    tradePro: 'trade pro 2',
    designer: 'Wendy',
    ETA: '9/16',
    view_desing: <a href="https://designstudio.ronbow.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#5d6465', textDecoration: 'underline', }}>View Design</a>,
    address: '680 8th St Suite 166, San Francisco, CA 94103',
    created_at: '2023/9/5',
  },
  {
    id: 624691230,
    title: <div key='3'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/proj/${624691230}`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>Kitty's Closet - Cupertino</span>
        </Link>
      </span>
    </div>,
    labels: [{ key: 'man', label: 'L-shape' }],
    state: 'closed',
    client: <div key='3'>
      <span
        style={{ textDecoration: 'underline', }}
      >
        <Link to={`/project-list/cust/${624691230}`} target="_blank">
          <span style={{ textDecoration: 'underline', color: '#5D6465' }}>Kitty</span>
        </Link>
      </span>
    </div>,
    tradePro: 'trade pro 3',
    designer: 'Wendy',
    ETA: '8/16',
    view_desing: <a href="https://designstudio.ronbow.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#5d6465', textDecoration: 'underline', }}>View Design</a>,
    address: '19479 Stevens Creek Blvd #110, Cupertino, CA 95014',
    created_at: '2023/8/5',
  },
];

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'title',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    width: '20%',
  },
  {
    title: 'Status',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      default: {
        text: 'Designing',
        status: 'Processing',
      },
      open: {
        text: 'New Lead',
        status: 'Error',
      },
      closed: {
        text: 'Paid',
        status: 'Success',
      },
    },
    width: '15%',
  },
  {
    title: 'Tag',
    dataIndex: 'labels',
    width: '15%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '*',
        },
      ],
    },
    renderFormItem: (_, { isEditable }) => {
      return isEditable ? <TagList /> : <Input />;
    },
    render: (_, row) =>
      row?.labels?.map((item) => <Tag key={item.key}>{item.label}</Tag>),
  },
  {
    title: 'Client Name',
    dataIndex: 'client',
    width: '15%',
  },
  {
    title: 'Trade Pro',
    dataIndex: 'tradePro',
    width: '10%',
  },
  {
    title: 'Designer',
    dataIndex: 'designer',
    width: '15%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'Designer is required',
        },
      ],
    },
  },
  {
    title: 'ETA',
    dataIndex: 'ETA',
    width: '15%',
  },
  {
    title: 'View Design',
    dataIndex: 'view_desing',
    width: '15%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '23%',
  },
  {
    title: 'Created Time',
    dataIndex: 'created_at',
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
          headerTitle="Current Pipeline"
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

        
        {/* <AddProject /> */}


        {/* <CurrentOrders />

        <Divider /> */}

        <ArchivedOrders />
        
      </div>
    </ConfigProvider>

  );
};

export default EditableTable;










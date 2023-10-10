
import React, { useRef, useState } from 'react';
import { PlusOutlined, ExportOutlined } from '@ant-design/icons';
// import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProCard,
  ProFormField,
} from '@ant-design/pro-components';
// import type { InputRef } from 'antd';
import { Button, Form, Input, Space, Tag } from 'antd';

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
    title: <div>
              <span style={{textDecoration: 'underline', }}>
                <a href="https://www.ronbow.com/products" rel="noopener noreferrer" target="_blank">
                  Project 1
                </a>    
              </span> 
            </div>,
    labels: [{ key: 'woman', label: 'Modern' }],
    state: 'open',
    client: 'client 1',
    tradePro: 'trade pro 1', 
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: <div>
            <span style={{textDecoration: 'underline', }}>
              <a href="https://www.ronbow.com/products" rel="noopener noreferrer" target="_blank">
                Project 2
              </a>    
            </span> 
          </div>,
  //   <div>
  //   <span>Project 2  </span> 
  //   <a href="https://www.ronbow.com/products" rel="noopener noreferrer" target="_blank">
  //     <ExportOutlined style={{cursor: 'pointer'}} /> 
  //   </a>  
  // </div>,
    labels: [{ key: 'man', label: 'L-shape' }],
    state: 'closed',
    client: 'client 2',
    tradePro: 'trade pro 2', 
    created_at: 1590481162000,
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
    width: '30%',
  },
  {
    title: 'Status',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: 'Designing',
        status: 'Error',
      },
      closed: {
        text: 'Paid',
        status: 'Success',
      },
    },
  },
  {
    title: 'Tag',
    dataIndex: 'labels',
    width: '20%',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
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
  },
  {
    title: 'Trade Pro',
    dataIndex: 'tradePro',
  },

];

const EditableTable = () => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  return (
    <>

      <EditableProTable
        rowKey="id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        headerTitle="Project List"
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
      
    </>
  );
};

export default EditableTable;










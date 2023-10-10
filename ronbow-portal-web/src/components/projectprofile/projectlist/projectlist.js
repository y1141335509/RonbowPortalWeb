
import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
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

// type DataSourceType = {
//   id: React.Key;
//   title?: string;
//   labels?: {
//     key: string;
//     label: string;
//   }[];
//   state?: string;
//   created_at?: number;
//   children?: DataSourceType[];
// };

const defaultData = [
  {
    id: 624748504,
    title: 'Project 1',
    labels: [{ key: 'woman', label: 'Modern' }],
    state: 'open',
    client: 'client 1',
    tradePro: 'trade pro 1', 
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: 'Project 2',
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
  // {
  //   title: '操作',
  //   valueType: 'option',
  //   width: 250,
  //   render: (text, record, _, action) => [
  //     <a
  //       key="editable"
  //       onClick={() => {
  //         action?.startEditable?.(record.id);
  //       }}
  //     >
  //       编辑
  //     </a>,
  //     <EditableProTable.RecordCreator
  //       key="copy"
  //       record={{
  //         ...record,
  //         id: (Math.random() * 1000000).toFixed(0),
  //       }}
  //     >
  //       <a>复制此项到末尾</a>
  //     </EditableProTable.RecordCreator>,
  //   ],
  // },
];

const EditableTable = () => {
  const actionRef = useRef();
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [form] = Form.useForm();
  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            actionRef.current?.addEditRecord?.({
              id: (Math.random() * 1000000).toFixed(0),
              title: '新的一行',
            });
          }}
          icon={<PlusOutlined />}
        >
          新建一行
        </Button>
        <Button
          key="rest"
          onClick={() => {
            form.resetFields();
          }}
        >
          重置表单
        </Button>
      </Space>

      <EditableProTable
        rowKey="id"
        scroll={{
          x: 960,
        }}
        actionRef={actionRef}
        headerTitle="可编辑表格"
        maxLength={5}
        // 关闭默认的新建按钮
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
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default EditableTable;









// ////////////////////////////////////////
// import React from 'react';
// import { Collapse, Divider, Button, ConfigProvider, List } from 'antd';
// import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, ToolOutlined, 
//  } from '@ant-design/icons';
// import './projectlist.css';




// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// const { Panel } = Collapse;

// const defaultProps = {
//   center: {
//     lat: 10.99835602,
//     lng: 77.01502627
//   },
//   zoom: 11
// };

// const items = [
//   {
//     key: '1',
//     label: 'FLOOR PLAN',
//     children: <div>
//       <p>Hello world, check out this <a href="https://www.ronbow.com" target="_blank" rel="noopener noreferrer">Ronbow Site <ExportOutlined /></a>.</p>
//     </div>
//     ,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '2',
//     label: 'BASIC INFO',
//     children: <div>
//       <ul>
//         <li>Budget: $80K</li>
//         <li>
//           <p>Location: 680 8th St Suite 166, San Francisco, CA 94103 <a href="https://www.google.com/maps/place/Ronbow+-+San+Francisco+Showroom/@37.7705158,-122.4047388,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7ff6c1506edd:0x6e721d2aa659d15b!8m2!3d37.7705158!4d-122.4047388!16s%2Fg%2F11krc64xsh?entry=ttu">(See Google Map) <ExportOutlined /></a></p>
//         </li>
//       </ul>
      
//     </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '3',
//     label: 'INSPIRATION',
//     children: <div>
//                 <img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//               </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '4',
//     label: 'DOCUMENTS',
//     children: <div>
//         123
//       </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '5',
//     label: 'CUSTOMER LIST',
//     children: <div>
//         {/* <CustomerList /> */}
//       </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '6',
//     label: 'BASIC INFO',
//     children: <div>123123</div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '7',
//     label: 'LIFESTYLE',
//     children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '8',
//     label: 'MEETING NOTES',
//     children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '9',
//     label: 'ALL PROJECTS',
//     children: <div>
//       123
//     </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
//   {
//     key: '10',
//     label: 'PROJECT LIST',
//     children: <div>
//       {/* <ProjectList /> */}
//     </div>,
//     headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
//   },
// ];

// const handleDownloadButton = () => {
//   window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
// }


// const handleDesignButton = () => {
//   window.open('https://designstudio.ronbow.com/');
// }

// const ProjectList = () => (

//   <div >
//       <span style={{ fontFamily: 'Roboto, sans-serif', 
//                       fontSize: '18px', 
//                       fontWeight: "400",
//                       lineHeight: "14px",
//                       letterSpacing: "0.02em",
//                       textAlign: "left" }}
//       >
//         Kevin's Kitchen - San Mateo
//       </span>
  
//       <Divider style={{ opacity: '0', }}/>
//       <List
//       header={
//         <div>
//           <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', }}>Project</span>
//           <div style={{display: 'flex', float: 'right', marginRight: '30px', }}>
//                 <FilterOutlined className="icon" />
//                 <SearchOutlined className="icon" />
//           </div>
//         </div>
//       }
//       // footer={<div>Footer</div>}
//       style={{ borderColor: 'white', }}
//       bordered
//       dataSource={items}
//       renderItem={(item) => (
//         <List.Item style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif', fontSize: '14px', }}>
//           hello
//         </List.Item>
//       )}
//     />

//       <Collapse accordion style={{ width: 'auto' }}>
//         <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
//                       lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
//                       backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
//           <span>Project</span>
//           <div style={{display: 'flex', float: 'right', marginRight: '30px', }}>
//               <FilterOutlined className="icon" />
//               <SearchOutlined className="icon" />
//           </div>
          
//         </div>

//         {items.slice(0, 5).map((item, index) => (
//           <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
//                  key={item.key} 
//                  style={{ borderTop: '1px solid #f0f0f0', }}
//           >
//             <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
//                           lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
//                           paddingLeft: '30px'}}>
//                 {item.children}
//             </div>
//           </Panel>
//         ))}

//         <div style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
//                       lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
//                       backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',  }}>
//           <span>Customer Info</span>
//         </div>

//         {items.slice(5, 10).map((item, index) => (
//           <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
//                  key={item.key} 
//                  style={{ borderTop: '1px solid #f0f0f0', }}
//           >
//             <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
//                           lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
//                           paddingLeft: '30px'}}>
//                 {item.children}
//             </div>
            
//           </Panel>
//         ))}
//       </Collapse>
//       <div style={{ textAlign: 'center',  }}>

//         <Button 
//           size='large' 
//           icon={<ToolOutlined />}
//           onClick={() => handleDesignButton()}
//           style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginRight: '10px', }}
//         >
//           Design Now!
//         </Button>

//         <Button 
//           size='large' 
//           icon={<DownloadOutlined /> }
//           onClick={() => handleDownloadButton()}
//           style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginLeft: '10px', }}
//         >
//           Download Files
//         </Button>

        
//       </div>
      
//     </div>
//   );


// export default ProjectList;

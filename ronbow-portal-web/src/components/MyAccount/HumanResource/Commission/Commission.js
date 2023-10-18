import React from 'react';
import { Table, Divider, Tag } from 'antd';



const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: '10%',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: '10%',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    width: '20%',
  },
  {
    title: 'Order #',
    dataIndex: 'orderNumber',
    width: '20%',
  },
  {
    title: 'Cash In',
    dataIndex: 'cashIn',
    width: '15%',
  },
  {
    title: 'Commission Amount',
    dataIndex: 'commissionAmount',
    width: '15%',
  },
];
const data = [
  {
    key: '1',
    date: '01/01/2023',
    status: <Tag>Paid</Tag>, 
    customer: 'customer 1',
    orderNumber: 'order 1',
    cashIn: '$10,000',
    commissionAmount: '$10,000',
  },
  {
    key: '2',
    date: '01/13/2023',
    status: <Tag>Paid</Tag>, 
    customer: 'customer 2',
    orderNumber: 'order 2',
    cashIn: '$13,000',
    commissionAmount: '$11,000',
  },
  {
    key: '3',
    date: '01/16/2023',
    status: <Tag>Pending</Tag>, 
    customer: 'customer 3',
    orderNumber: 'order 3',
    cashIn: '$20,000',
    commissionAmount: '$19,000',
  },
];
const App = () => (
  <>
    <Divider>Commission Table</Divider>
    <Table columns={columns} dataSource={data} size="small" />
  </>
);
export default App;
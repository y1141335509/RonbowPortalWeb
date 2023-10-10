import React from 'react';
import { Table, Divider } from 'antd';
import './commission.css';



const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
  },
  {
    title: 'Order #',
    dataIndex: 'orderNumber',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
  },
  {
    title: 'Commission Amount',
    dataIndex: 'commissionAmount',
  }
];
const data = [
  {
    key: '1',
    date: '01/01/2023',
    customer: 'customer 1',
    orderNumber: 'order 1',
    revenue: '$10,000',
    commissionAmount: '$10,000',
  },
  {
    key: '2',
    date: '01/13/2023',
    customer: 'customer 2',
    orderNumber: 'order 2',
    revenue: '$13,000',
    commissionAmount: '$11,000',
  },
  {
    key: '3',
    date: '01/16/2023',
    customer: 'customer 3',
    orderNumber: 'order 3',
    revenue: '$20,000',
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
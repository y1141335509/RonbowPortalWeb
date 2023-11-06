import React, { useState } from 'react';
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
    title: 'Order #',
    dataIndex: 'orderNumber',
    width: '20%',
  },
  // {
  //   title: 'Customer',
  //   dataIndex: 'customer',
  //   width: '20%',
  // },
  {
    title: 'Cash In',
    dataIndex: 'cashIn',
    width: '15%',
    render: (text) => `$${text.toLocaleString()}`,
  },
  {
    title: 'Commission Amount',
    dataIndex: 'commissionAmount',
    width: '15%',
    render: (text) => `$${text.toLocaleString()}`,
  },
];



const data = [
  {
    key: '1',
    orderNumber: 'SO#',
    date: '01/01/2023',
    status: <Tag>Paid</Tag>, 
    // customer: 'customer 1',
    cashIn: 10000,
    commissionAmount: 400,
  },
  {
    key: '2',
    orderNumber: 'SO#',
    date: '01/13/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 2',
    cashIn: 13000,
    commissionAmount: 450,
  },
  {
    key: '3',
    orderNumber: 'SO#',
    date: '01/16/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 3',
    cashIn: 20000,
    commissionAmount: 900,
  },
  {
    key: '4',
    orderNumber: 'Adjustment#',
    date: '01/31/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 3',
    cashIn: '',
    commissionAmount: 100,
  },
  {
    key: '5',
    orderNumber: 'SO#',
    date: '02/01/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 4',
    cashIn: 10000,
    commissionAmount: 450,
  },
];




const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const getVisibleData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const getTotal = (key, visibleData) => {
    return visibleData.reduce((sum, record) => sum + record[key], 0);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      size="small"
      pagination={{
        pageSize: pageSize,
        current: currentPage,
        onChange: (page) => setCurrentPage(page)
      }}
      style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto',  }}
      summary={() => {
        const visibleData = getVisibleData();
        return (
          <Table.Summary.Row style={{ fontWeight: 'bold', }}>
            <Table.Summary.Cell>Total</Table.Summary.Cell>
            {/* <Table.Summary.Cell></Table.Summary.Cell> */}
            <Table.Summary.Cell></Table.Summary.Cell>
            <Table.Summary.Cell></Table.Summary.Cell>
            <Table.Summary.Cell>
              ${getTotal('cashIn', visibleData).toLocaleString()}
            </Table.Summary.Cell>
            <Table.Summary.Cell>
              ${getTotal('commissionAmount', visibleData).toLocaleString()}
            </Table.Summary.Cell>
          </Table.Summary.Row>
        );
      }}
    />
  );
};

export default App;













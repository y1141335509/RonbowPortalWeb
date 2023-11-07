import React, { useState } from 'react';
import { Table, Divider, Tag } from 'antd';
import { Button } from 'antd';
import { LeftOutlined, DownOutlined } from '@ant-design/icons';



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
    expandable: {
      items: ['Item 1', 'Item 2'],
      orderNumbers: ['SO#1', 'SO#2'],
      cashIns: ['Cash In 1', 'Cash In 2'], // Example sub-data
      commissionAmounts: ['$100', '$300'],
    },
  },
  {
    key: '2',
    orderNumber: 'SO#',
    date: '01/13/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 2',
    cashIn: 13000,
    commissionAmount: 450,
    expandable: {
      items: ['Item 1', 'Item 2'],
      orderNumbers: ['SO#1', 'SO#2'],
      cashIns: ['Cash In 1', 'Cash In 2'], // Example sub-data
      commissionAmounts: ['$100', '$350'],
    },
  },
  {
    key: '3',
    orderNumber: 'SO#',
    date: '01/16/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 3',
    cashIn: 20000,
    commissionAmount: 900,
    expandable: {
      items: ['Item 1', 'Item 2', 'Item 3'],
      orderNumbers: ['SO#1', 'SO#2', 'SO#3'],
      cashIns: ['Cash In 1', 'Cash In 2', 'Cash In 3'], // Example sub-data
      commissionAmounts: ['$200', '$300', '$400'],
    },
  },
  {
    key: '4',
    orderNumber: 'Adjustment#',
    date: '01/31/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 3',
    cashIn: '',
    commissionAmount: 100,
    expandable: {
      items: ['Item 1', 'Item 2'],
      orderNumbers: ['SO#1', 'SO#2'],
      cashIns: ['Cash In 1', 'Cash In 2'], // Example sub-data
      commissionAmounts: ['$50', '$50'],
    },
  },
  {
    key: '5',
    orderNumber: 'SO#',
    date: '02/01/2023',
    status: <Tag>Paid</Tag>,
    // customer: 'customer 4',
    cashIn: 10000,
    commissionAmount: 450,
    expandable: {
      items: ['Item 1', 'Item 2'],
      orderNumbers: ['SO#1', 'SO#2'],
      cashIns: ['Cash In 1', 'Cash In 2'], // Example sub-data
      commissionAmounts: ['$150', '$300'],
    },
  },
];



const expandedRowRender = (record, index, indent, expanded) => {
  // Match the sub-columns to the main columns where necessary
  const subColumns = [
    { title: 'Date', dataIndex: 'date', key: 'date' }, // for alignment with 'Date'
    { title: 'Status', dataIndex: 'status', key: 'status' }, // for alignment with 'Status'
    // ... you can add more to match the main columns structure
    { title: 'Cash In Detail', dataIndex: 'detail', key: 'detail' },
    { title: 'Commission Detail', dataIndex: 'commissionDetail', key: 'commissionDetail' }, // if needed
    // The rest of the columns can remain empty for alignment
    { title: '', dataIndex: 'empty1', key: 'empty1', render: () => <span></span> },
    { title: '', dataIndex: 'empty2', key: 'empty2', render: () => <span></span> },
    // Add more empty columns as needed to align with the main columns
  ];

  // Generate sub-data that includes fields to match the empty cells in subColumns
  const data = record.expandable.cashIns.map((item, idx) => ({
    key: idx,
    date: record.date, // assuming you want to replicate the date for sub-rows
    status: record.expandable.items[idx], // replicate status if necessary
    detail: item,
    commissionDetail: record.expandable.commissionAmounts[idx], // if you have this detail
    // Empty data for alignment
    empty1: '',
    empty2: '',
    // Add more empty data if you added more empty columns
  }));

  return (
    <Table
      columns={subColumns}
      dataSource={data}
      pagination={false}
      showHeader={false} // Hide the header if you prefer
    />
  );
};



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

  const customExpandIcon = (props) => {
    if (props.expanded) {
      return <Button onClick={e => { e.stopPropagation(); props.onExpand(props.record, e); }} icon={<DownOutlined />} />;
    } else {
      return <Button onClick={e => { e.stopPropagation(); props.onExpand(props.record, e); }} icon={<LeftOutlined />} />;
    }
  };

  const newColumns = [
    ...columns,
    {
      title: 'Expand',
      key: 'expand',
      render: (text, record, index) => {
        return {
          children: customExpandIcon({
            expanded: expandedRowKeys.includes(record.key),
            record,
            onExpand: onRowExpand,
          }),
        };
      },
    },
  ];

  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const onRowExpand = (record, event) => {
    const keys = expandedRowKeys.includes(record.key)
      ? expandedRowKeys.filter(key => key !== record.key)
      : [...expandedRowKeys, record.key];
    setExpandedRowKeys(keys);
  };

  return (
    <Table
      columns={newColumns}
      dataSource={data}
      expandedRowRender={expandedRowRender}
      expandIcon={() => null} // Hide the default expand icon
      expandedRowKeys={expandedRowKeys} // Control which rows are expanded
      onExpand={(expanded, record) => onRowExpand(record)}
      pagination={{
        pageSize: pageSize,
        current: currentPage,
        onChange: setCurrentPage,
      }}
      summary={() => {
        const visibleData = getVisibleData();
        return (
          <Table.Summary.Row style={{ fontWeight: 'bold', }}>
            <Table.Summary.Cell>Total</Table.Summary.Cell>
            <Table.Summary.Cell></Table.Summary.Cell>
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


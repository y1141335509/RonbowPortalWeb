import React, { useState, } from 'react';
import { Card, Button, Row, Col, Tag, Divider } from 'antd';

const CardList = () => {
  const [viewOption, setViewOption] = useState('All');

  const cardsData = {
    'Free Consultation': [
      { name: "Kevin's Kitchen - Palo Alto", date: '2023/10/05', status: 'New Lead' },
      //... add more data as needed
    ],
    'Quote Provided': [
      { name: "John's Wet Bar - San Mateo", date: '2023/09/16', status: 'Designing' },
    ],
    'Design Fee Collected': [
      { name: "Kitty's Closet - Cupertino", date: '2023/08/16', status: 'Paid' },
    ],
    '50% Deposit Collected': [
      // { name: 'Project G', date: '2023/03/10', status: 'Paid', },
      // { name: 'Project H', date: '2023/10/01', status: 'Paid', },
    ],
    'Deal Won': [
      // { name: 'Project I', date: '2022/11/31', status: 'Paid', },
      // { name: 'Project J', date: '2023/10/10', status: 'Designing', },
    ],
    'Deal Lost': [
      // { name: 'Project K', date: '2023/11/10', status: 'New Lead', },
      // { name: 'Project L', date: '2023/10/10', status: 'Designing', },
    ],
  };

  const cards = [
    'Free Consultation',
    'Quote Provided',
    'Design Fee Collected',
    '50% Deposit Collected',
    'Deal Won',
    'Deal Lost'
  ];

  const filterData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const lastMonth = new Date(currentDate);
    const allYear = currentDate.getFullYear() - 9999;
    lastMonth.setMonth(currentDate.getMonth() - 1);

    switch (viewOption) {
      case 'YTD':
        return project => new Date(project.date).getFullYear() === currentYear;
      case 'Last Month':
        return project => new Date(project.date).getMonth() === lastMonth.getMonth();
      case 'Current Month':
        return project => new Date(project.date).getMonth() === currentMonth;
      default:
        return project => new Date(project.date).getFullYear() >= allYear;
    }
  };

  return (
    <div style={{ width: '100%', float: 'left' }}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          type={viewOption === 'All' ? 'primary' : 'default'}
          onClick={() => setViewOption('All')}
        >
          All
        </Button>
        <Button
          type={viewOption === 'YTD' ? 'primary' : 'default'}
          onClick={() => setViewOption('YTD')}
          style={{ marginLeft: '10px' }}
        >
          YTD
        </Button>
        <Button
          type={viewOption === 'Last Month' ? 'primary' : 'default'}
          onClick={() => setViewOption('Last Month')}
          style={{ marginLeft: '10px' }}
        >
          Last Month
        </Button>
        <Button
          type={viewOption === 'Current Month' ? 'primary' : 'default'}
          onClick={() => setViewOption('Current Month')}
          style={{ marginLeft: '10px' }}
        >
          Current Month
        </Button>
      </div>


      <Row gutter={[16, 16]} style={{ marginTop: '20px', }}>
        {Object.keys(cardsData).map((cardTitle) => (
          <Col span={4} key={cardTitle}>
            <Card title={cardTitle} bordered={true} size="small" headStyle={{ textAlign: 'center', }}>
              {cardsData[cardTitle].filter(filterData()).map((project) => (
                <div>
                  <p key={project.name}>
                    {project.name} ({project.date})
                  </p>
                  <Tag key={project.name}>{project.status}</Tag>
                  <Divider />
                </div>

              ))}
            </Card>
          </Col>
        ))}
      </Row>


    </div>
  );
};

export default CardList;

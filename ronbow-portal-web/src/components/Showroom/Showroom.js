import React from 'react';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
import RequestMaintenance from './RequestMaintenance/RequestMaintenance';
import BookShowroomAppointment from './BookShowroomAppointment/BookShowroomAppointment';
import RequestSample from './RequestSample/RequestSample';




const items = new Array(3).fill(null).map((_, i) => {
  const names = ['Request Maintenance', 'Book Showroom Appointment', 'Request Sample', ];
  const components = [<RequestMaintenance />, <BookShowroomAppointment />, <RequestSample />];
  return {
    label: names[i],
    key: i,
    children: components[i],
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});



const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  );
  return <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />;
};
export default App;
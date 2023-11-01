import React from 'react';
import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
import ShowroomMaintenance from './ShowroomMaintenance/ShowroomMaintenance';
import BookShowroomAppointment from './BookShowroomAppointment/BookShowroomAppointment';
import RequestSample from './Samples/Samples';




const items = new Array(3).fill(null).map((_, i) => {
  const names = ['Showroom Maintenance', 'Book Showroom Appointment', 'Samples', ];
  const components = [<ShowroomMaintenance />, <BookShowroomAppointment />, <RequestSample />];
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
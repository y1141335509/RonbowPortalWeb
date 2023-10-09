import React from 'react';
import { Avatar, List } from 'antd';
const data = [
  {
    name: 'Kevin Lee',
    address: '1234 Oakwood Ave, San Francisco, CA',
    contact: '(123)-456-7890',
  },
];
const App = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.name}</a>}
          description={item.address}
        />
        <div style={{ marginRight: '30px', }}>{item.contact}</div>
      </List.Item>
    )}
  />
);
export default App;
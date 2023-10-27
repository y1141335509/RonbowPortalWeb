import React from 'react';
import { Checkbox, ConfigProvider } from 'antd';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => {
  return (
    <ConfigProvider style={{ float: 'left', width: '20%', marginLeft: '20px', fontFamily: 'Roboto, sans-serif', }}>
      <Checkbox onChange={onChange}></Checkbox>
    </ConfigProvider>
  )
}
export default App;
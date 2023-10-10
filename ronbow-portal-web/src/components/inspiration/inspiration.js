import './inspiration.css';
import React from 'react';
import { Progress } from 'antd';



const App = () => (
  <>
    <Progress 
      percent={50} 
      status="active" 
      strokeColor={'#5D6465'} />
    <Progress percent={100} />
  </>
);
export default App;
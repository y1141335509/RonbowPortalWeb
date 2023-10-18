import React from 'react';
import { Carousel } from 'antd';




const contentStyle = {
  height: '200px',
  color: '#5D6465',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#F0ECEC',
};
const App = () => (
  <div>
    <h1 style={{ fontFamily: 'Roboto, sans-serif', }}>Industry News</h1>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </div>
  
);
export default App;
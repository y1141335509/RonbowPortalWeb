import React, { useState } from 'react';
import { Steps } from 'antd';
import './progress.css';



const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        style={{ color: '#000', }}
        items={[
          {
            title: 'Design',
            subTitle: 'Jan 1, 2023',
            status: 'finish',
            // description: 'This is a description.',
          },
          {
            title: 'Manufacture',
            subTitle: 'Jan 15, 2023',
            status: 'finish',
            // description: 'This is a description.',
          },
          {
            title: 'Installation',
            subTitle: 'Jan 28, 2023',
            status: 'process',
            // description: 'This is a description.',
          },
        ]}
      />
      
     
    </>
  );
};
export default App;
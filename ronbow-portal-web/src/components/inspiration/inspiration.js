import './inspiration.css';
import React from 'react';
import { Progress, Image } from 'antd';
import { FilterOutlined, SearchOutlined, } from '@ant-design/icons';


const App = () => (
  <>
    <span>Inspiration Space</span>
    <div style={{display: 'flex', float: 'right', marginRight: '30px', }}>
        <FilterOutlined className="icon" />
        <SearchOutlined className="icon" />
    </div>
    <Progress 
      percent={50} 
      status="active" 
      strokeColor={'#5D6465'} />
    <Progress percent={100} />
    <Image
      width={200}
      preview={{
        imageRender: () => (
          <video
            muted
            width="100%"
            controls
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx5_8_Q6DPLjEM54PS_ShZuEPX7AL28PXV-Ryr0C8Uw&s"
          />
        ),
        toolbarRender: () => null,
      }}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx5_8_Q6DPLjEM54PS_ShZuEPX7AL28PXV-Ryr0C8Uw&s"
    />
  </>
);
export default App;
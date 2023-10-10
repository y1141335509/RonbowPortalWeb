import React from 'react';
import { Collapse, Divider, Button, ConfigProvider } from 'antd';
import './projectprofile.css';
import { ExportOutlined, FilterOutlined, SearchOutlined,
 } from '@ant-design/icons';
import Progress from './progress';
import Zoom from '../zoom/zoom';
import CustomerInfo from './customerinfo/customerinfo';
import ProjectList from './projectlist/projectlist';
import CustomerList from './customerlist/customerlist';
import GoogleMapReact from 'google-map-react';



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;



const items = [
  {
    key: '1',
    label: 'FLOOR PLAN',
    children: <div>
      <p>Hello world, check out this <a href="https://www.ronbow.com" target="_blank" rel="noopener noreferrer">Ronbow Site <ExportOutlined /></a>.</p>
      <Zoom />
    </div>
    ,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'BASIC INFO',
    children: <ul>
      <li>Budget: $80K</li>
      <li>
        <p>Location: 680 8th St Suite 166, San Francisco, CA 94103</p>
      </li>
    </ul>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '3',
    label: 'INSPIRATION',
    children: <div>
                <img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '4',
    label: 'DOCUMENTS',
    children: <div>
        <Zoom />
      </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '5',
    label: 'CUSTOMER LIST',
    children: <div>
        <CustomerList />
      </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '6',
    label: 'BASIC INFO',
    children: <div><CustomerInfo /></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '7',
    label: 'LIFESTYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '8',
    label: 'MEETING NOTES',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '9',
    label: 'ALL PROJECTS',
    children: <div>
      <Zoom />
    </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '10',
    label: 'PROJECT LIST',
    children: <div>
      <ProjectList />
    </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
];

const handleButton = () => {
  window.open('https://designstudio.ronbow.com/');
}

const ProjectProfile = () => (

  <div >
      <span style={{ fontFamily: 'Roboto, sans-serif', 
                      fontSize: '18px', 
                      fontWeight: "400",
                      lineHeight: "14px",
                      letterSpacing: "0.02em",
                      textAlign: "left" }}
      >
        Kevin's Kitchen - San Mateo
      </span>
  
      <Divider style={{ opacity: '0', }}/>
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='right'>
        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
          <span>Project</span>
          <div style={{display: 'flex', float: 'right', marginRight: '30px', }}>
              <FilterOutlined className="icon" />
              <SearchOutlined className="icon" />
          </div>
          <Progress />
          
        </div>

        {items.slice(0, 5).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
                 key={item.key} 
                 style={{ borderTop: '1px solid #f0f0f0', }}
          >
            <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                          paddingLeft: '30px'}}>
                {item.children}
            </div>
          </Panel>
        ))}

        <div style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px',  }}>
          <span>Customer Info</span>
        </div>

        {items.slice(5, 10).map((item, index) => (
          <Panel header={<span style={item.headerStyle}>{item.label}</span>} 
                 key={item.key} 
                 style={{ borderTop: '1px solid #f0f0f0', }}
          >
            <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                          lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                          paddingLeft: '30px'}}>
                {item.children}
            </div>
            
          </Panel>
        ))}
      </Collapse>
      <div style={{ textAlign: 'center',  }}>

        <Button 
          size='large' 
          onClick={() => handleButton()}
          style={{ backgroundColor: '#5D6465', color: '#F0ECEC', }}
        >
          Design Now!
        </Button>

        
      </div>
      
    </div>
  );


export default ProjectProfile;

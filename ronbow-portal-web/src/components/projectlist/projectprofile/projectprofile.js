import React from 'react';
import { Collapse, Divider, Button, ConfigProvider, Menu, Dropdown, Steps  } from 'antd';
import './projectprofile.css';
import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, 
  ToolOutlined, PrinterOutlined, MailOutlined 
} from '@ant-design/icons';
import Progress from './progress/progress';
import Zoom from '../../zoom/zoom';
import CustomerInfo from '../projectprofile/customerinfo/customerinfo';



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
    children: <div>
      <ul>
        <li>Budget: $80K</li>
        <li>
          <p>Location: 680 8th St Suite 166, San Francisco, CA 94103 <a href="https://www.google.com/maps/place/Ronbow+-+San+Francisco+Showroom/@37.7705158,-122.4047388,17z/data=!3m1!4b1!4m6!3m5!1s0x808f7ff6c1506edd:0x6e721d2aa659d15b!8m2!3d37.7705158!4d-122.4047388!16s%2Fg%2F11krc64xsh?entry=ttu">(See Google Map) <ExportOutlined /></a></p>
        </li>
      </ul>
      
    </div>,
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
    label: 'LIFESTYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '6',
    label: 'BASIC INFO',
    children: <div>
    </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '7',
    label: 'MEETING NOTES',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '8',
    label: 'ALL PROJECTS',
    children: <div>
      <Zoom />
    </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
];


const handleDesignButton = () => {
  window.open('https://designstudio.ronbow.com/');
}

const handleEmailUs = () => {
  window.location.href = "mailto:example@gmail.com";
};

const handlePrint = () => {
  window.open("URL_TO_PDF", '_blank').print();
};

const handleDownload = () => {
  window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};

const menu = (
  <Menu>
     <Menu.Item key="1" icon={<DownloadOutlined />} onClick={handleDownload}>
      Preview & Download
    </Menu.Item>
    <Menu.Item key="2" icon={<PrinterOutlined />} onClick={handlePrint}>
      Print
    </Menu.Item>
    <Menu.Item key="3" icon={<MailOutlined />} onClick={handleEmailUs}>
      Email Customer
    </Menu.Item>
   
  </Menu>
);


const ProjectProfile = () => (

  <div style={{ width: '100%', overflow: 'hidden', }}>
    <div style={{ float: 'left', width: '20%', marginLeft: '20px', }}> 
      <Progress />
    </div>
      

    <div style={{ float: 'right', width: '70%', marginRight: '20px', marginLeft: '20px', }}>
      <span style={{ fontFamily: 'Roboto, sans-serif', 
                      fontSize: '18px', 
                      fontWeight: "400",
                      lineHeight: "14px",
                      letterSpacing: "0.02em",
                      textAlign: "left" }}
      >
        Kevin's Kitchen - Palo Alto
      </span>
  
      <Divider style={{ opacity: '0', }}/>
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='end' >
        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
          <span>Project Detail</span>
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

      </Collapse>

      <Divider style={{ opacity: '0', }}/>
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='end' >
        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
          <span>Customer Info</span>
          
        </div>

        {items.slice(5, 9).map((item, index) => (
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
          icon={<ToolOutlined />}
          onClick={() => handleDesignButton()}
          style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginRight: '10px', }}
        >
          Design Now!
        </Button>

        <Dropdown overlay={menu} trigger={['click']}>
          <Button 
            size='large' 
            icon={<DownloadOutlined />}
            style={{ backgroundColor: '#fff', color: '#5D6465', marginLeft: '10px', }}
          >
            Files
          </Button>
        </Dropdown>
      </div>  
    </div>  
  </div>
);


export default ProjectProfile;

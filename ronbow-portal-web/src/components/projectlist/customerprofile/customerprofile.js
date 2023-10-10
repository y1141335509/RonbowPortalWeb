import React from 'react';
import { Collapse, Divider, Button, ConfigProvider, Menu, Dropdown  } from 'antd';
import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, 
  ToolOutlined, PrinterOutlined, MailOutlined 
} from '@ant-design/icons';
import Zoom from '../../zoom/zoom';
import './customerprofile.css';
import CustomerInfo from '../projectprofile/customerinfo/customerinfo';




const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

const items = [
  {
    key: '1',
    label: 'BASIC INFO',
    children: <div><CustomerInfo /></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '2',
    label: 'LIFESTYLE',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '3',
    label: 'MEETING NOTES',
    children: <div><img src="https://cdn.ronbow.com/images/video-poster.jpg" alt="Description" className='responsive-image'/></div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '4',
    label: 'ALL PROJECTS',
    children: <div>
      <Zoom />
    </div>,
    headerStyle: {fontFamily: 'Roboto, sans-serif', fontSize: '12px', fontWeight: '400', lineHeight: '14px', letterSpacing: '0.02em', textAlign: 'left', },
  },
  {
    key: '5',
    label: 'PROJECT LIST',
    children: <div>
      {/* <ProjectList /> */}
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
    <Menu.Item key="1" icon={<MailOutlined />} onClick={handleEmailUs}>
      Email Us
    </Menu.Item>
    <Menu.Item key="2" icon={<PrinterOutlined />} onClick={handlePrint}>
      Print
    </Menu.Item>
    <Menu.Item key="3" icon={<DownloadOutlined />} onClick={handleDownload}>
      Download
    </Menu.Item>
  </Menu>
);



const CustomerList = () => (

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
      <Collapse accordion style={{ width: 'auto' }} expandIconPosition='end' >
        <div  style={{fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: '300',
                      lineHeight: '30px', letterSpacing: '0.02em', textAlign: 'left', 
                      backgroundColor: 'white', paddingTop: '20px', paddingBottom: '10px', }}>
          <span>Customer Info</span>
          <div style={{display: 'flex', float: 'right', marginRight: '30px', }}>
              <FilterOutlined className="icon" />
              <SearchOutlined className="icon" />
          </div>
          
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
            style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginLeft: '10px', }}
          >
            Download Files
          </Button>
        </Dropdown>
      </div>
      
    </div>
  );


export default CustomerList;

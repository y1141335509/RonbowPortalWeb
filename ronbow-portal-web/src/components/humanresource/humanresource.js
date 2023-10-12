import React from 'react';
import { Button, Divider, Upload, message, Dropdown, Menu, } from 'antd';
import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, 
  ToolOutlined, PrinterOutlined, MailOutlined 
} from '@ant-design/icons';
import Commission from './commission/commission';
import './humanresource.css';




const handlePrint = () => {
  window.open("URL_TO_PDF", '_blank').print();
};

const handleDownload = () => {
  window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};


const menu = (
  <Menu>
     <Menu.Item key="1" onClick={handleDownload}>
      Company Policy
    </Menu.Item>
    <Menu.Item key="2" onClick={handlePrint}>
      Benefits
    </Menu.Item>
  </Menu>
);


const HumanResource = () => {
  const handleUpload = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="hr-container">
      <div className="commission-container">
        <Commission />
      </div>

      <Divider />

      <div>

        <Button 
          size='large'
          type="primary" 
          onClick={() => window.open('https://www.paychex.com/login', '_blank')}
        >
          Time Off
        </Button>

        <Dropdown overlay={menu} trigger={['click']}>
          <Button 
            size='large' 
            icon={<DownloadOutlined />}
            style={{ backgroundColor: '#fff', color: '#5D6465', marginLeft: '10px', }}
          >
            Documents
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

// Dummy function to simulate file upload
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 2000);
};

export default HumanResource;

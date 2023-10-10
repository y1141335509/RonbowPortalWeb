import React from 'react';
import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './humanresource.css';



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
      <h1>Human Resources</h1>
      <Button 
        type="primary" 
        onClick={() => window.open('https://www.paychex.com/login', '_blank')}
      >
        Go to Paychex
      </Button>
      <Upload 
        customRequest={dummyRequest}
        onChange={handleUpload}
      >
        <Button icon={<UploadOutlined />}>Upload File</Button>
      </Upload>
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

// ImportDropdown.js
import React, { useRef } from 'react';
import { Menu, Dropdown, Button, Space, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ImportDropdown = () => {
  const fileInputRef = useRef(null);

  const handleMenuClick = (e) => {
    switch (e.key) {
      case '1': // Import from Computer
        fileInputRef.current.click();
        break;
      case '2': // Import from Google Sheet
        // Add your Google Sheet import logic here
        break;
      case '3': // Download Example
        // Add your Download Example logic here
        break;
      default:
        console.log('Unknown action');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Process the file
      message.info(`File ${file.name} selected`);
      // Reset the value so the same file can be selected again if needed
      event.target.value = null;
    }
  };

  // Menu items for the dropdown
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        Import from Computer
      </Menu.Item>
      <Menu.Item key="2">
        Import from Google Sheet
      </Menu.Item>
      <Menu.Item key="3">
        Download Example
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ float: 'right', marginBottom: '10px', marginRight: '30px', }}>
      <Dropdown overlay={menu}>
        <Button>
          <Space>
            Input From Your Upload <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImportDropdown;

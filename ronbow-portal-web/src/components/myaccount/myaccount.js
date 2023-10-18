import React, { useState } from 'react';
import { Form, Input, Button, Avatar, ConfigProvider, Divider, } from 'antd';
import './MyAccount.css';
import HumanResource from './HumanResource/HumanResource';


const { TextArea } = Input;


const MyAccount = () => {
  const [formData, setFormData] = useState({
    currPassword: 'password456',
    newPassword: 'password123',
    bio: '[Designer Name] is a seasoned cabinet designer with over [X years] of experience in crafting bespoke cabinetry solutions. A graduate of [Relevant University or Design School], [Designer Name]‘s passion lies in translating homeowners’ visions into functional and aesthetic designs.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('User Data:', formData);
    // Here you would typically handle the form submission,
    // such as sending the data to a server
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465',
          colorSuccess: '#F0ECEC', 
        }
      }}
    >
      <div className="account-container" >
        <Avatar size={64} 
              style={{ color: '#464F50', backgroundColor: '#F0ECEC', }}
        >KR
        </Avatar>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Current Password" >
            <Input.Password
              
              name="currPassword"
              value={formData.currPassword}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="New Password">
            <Input.Password
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="bio">
            <TextArea name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={6}
              maxLength={6} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>

        <Divider />

        <HumanResource />
      </div>

    </ConfigProvider>
    
  );
};

export default MyAccount;

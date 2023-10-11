import React, { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import './myaccount.css';



const MyAccount = () => {
  const [formData, setFormData] = useState({
    currPassword: 'password456',
    newPassword: 'password123',
    bio: 'I am a good guy!',
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
    <div className="account-container">
      <Avatar size={64} style={{ color: '#464F50', backgroundColor: '#F0ECEC' }}>
        KR
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
          <Input
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MyAccount;

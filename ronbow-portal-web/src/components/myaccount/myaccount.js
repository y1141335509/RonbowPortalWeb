import React, { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import './myaccount.css';



const MyAccount = () => {
  const [formData, setFormData] = useState({
    username: 'JohnDoe',
    password: 'password123',
    position: 'Developer',
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
      <Avatar size={64} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        JD
      </Avatar>
      <h1>My Account</h1>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Username">
          <Input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Position">
          <Input
            name="position"
            value={formData.position}
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

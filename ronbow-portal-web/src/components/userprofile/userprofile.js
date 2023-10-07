// UserProfile.jsx
import React from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserProfile = ({ name, email }) => {
  return (
    <Card style={{ width: 300 }}>
      <Avatar size={64} icon={<UserOutlined />} />
      <h2>{name}</h2>
      <p>{email}</p>
    </Card>
  );
};

export default UserProfile;

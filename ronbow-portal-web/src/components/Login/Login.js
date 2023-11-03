import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, ConfigProvider } from "antd";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate login (in a real app, you would send a request to your backend here)
    console.log("Received values of form: ", values);
    setTimeout(() => {
      setLoading(false);
      // Set the user as authenticated in local storage
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465', colorSuccess: '#F0ECEC',
        }
      }}>

      <div style={{ maxWidth: '500px', alignItems: 'center', textAlign: 'center', margin: '0 auto', }} >
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>

      </div>

    </ConfigProvider>
  );
};

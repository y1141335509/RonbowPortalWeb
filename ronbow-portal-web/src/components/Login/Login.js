import React from 'react';
import { Form, Input, Button, Card, Alert, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { AuthService } from './AuthService'; // Import the authentication service








const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [error, setError] = React.useState('');


  const handleLogin = async () => {
    // Your login logic...
    const isLoggedIn = true; // Replace with actual login logic
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  };

  const onFinish = (values) => {
    AuthService.login(values.username, values.password, (success, message) => {
      if (success) {
        navigate('/dashboard'); // Use navigate function to change route
      } else {
        setError(message);
      }
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465', colorSuccess: '#F0ECEC',
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right', height: '100vh' }}>
        <Card title="Login" style={{ width: 450, textAlign: 'center', }}>
          {error && <Alert message={error} type="error" showIcon closable afterClose={() => setError('')} />}
          <Form
            name="login"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div style={{ textAlign: 'center', }}>
                <Button type="primary" htmlType="submit" >
                  Login
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </ConfigProvider>

  );
};

export default LoginPage;

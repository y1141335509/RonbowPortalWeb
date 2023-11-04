import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';



const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const App = () => {
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/* <Form.Item
                label="Lead Name"
                name="lead_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your lead name!',
                    },
                ]}
            >
                <Input />
            </Form.Item> */}

            <Form.Item
                label="Customer Name"
                name="customer_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your customer name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[
                    {
                        required: false,
                        message: 'Please input your phone number',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Address"
                name="address"
                rules={[
                    {
                        required: false,
                        message: 'Please input your address',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Copy Link"
                name="copy_link"
            >
                <span><Link href="www.google.com" target="_blank">www.google.com</Link></span>
            </Form.Item>


        </Form>
    );
}
export default App;
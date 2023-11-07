import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message, } from 'antd';
import { CopyOutlined } from '@ant-design/icons'; // Import the CopyOutlined icon



const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const copyLinkToClipboard = async (link) => {
    try {
        await navigator.clipboard.writeText(link);
        // Display a "Copied" message when the link is copied
        message.success('Copied!');
    } catch (err) {
        // Display an error message if there was an issue copying the link
        message.error('Failed to copy link.');
    }
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

            <Form.Item label="Copy Link" name="copy_link">
                <Input
                    addonAfter={
                        <CopyOutlined
                            onClick={() => copyLinkToClipboard("https://ronbow.com/invite/abcd.com")}
                            style={{ cursor: 'pointer' }}
                        />
                    }
                    defaultValue="https://ronbow.com/invite/abcd.com"
                    readOnly
                />
            </Form.Item>



        </Form>
    );
}
export default App;
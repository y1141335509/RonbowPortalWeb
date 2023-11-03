import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  TimePicker
} from 'antd';




const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}

      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      

      <Form.Item
        name="feedback"
        label="Feedback"
        required={true}
      >
        <Input.TextArea showCount maxLength={300} />
      </Form.Item>

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Leave Feedback
        </Button>
        <Button type="secondary" htmlType="submit">
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
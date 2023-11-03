import React, { useState } from 'react';
import { Button, Form, Select } from 'antd';

const { Option } = Select;

const sizeOptions = ['Simple', 'Regular'];
const materialOptions = ['Material 1', 'Material 2', 'Material 3'];
const colorOptions = ['Color 1', 'Color 2', 'Color 3'];


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        size: 'Simple',
        material: 'Material 1',
        color: 'Color 1',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="size"
        label="Size"
        rules={[
          {
            required: true,
            message: 'Please select Size',
          },
        ]}
      >
        <Select placeholder="Select Size">
          {sizeOptions.map(size => (
            <Option key={size} value={size}>{size}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="material"
        label="Material"
        rules={[
          {
            required: true,
            message: 'Please select Material',
          },
        ]}
      >
        <Select placeholder="Select Material">
          {materialOptions.map(material => (
            <Option key={material} value={material}>{material}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="color"
        label="Color"
        rules={[
          {
            required: true,
            message: 'Please select Color',
          },
        ]}
      >
        <Select placeholder="Select Color">
          {colorOptions.map(color => (
            <Option key={color} value={color}>{color}</Option>
          ))}
        </Select>
      </Form.Item>

      <img
        src="https://cdn.ronbow.com/images/cabinets/Blue-Moon-Bay-SM-M12058.jpg"
        alt="Sample"
        style={{ width: '100%', height: 'auto' }}
      />
    </Form>
  );
};

export default App;

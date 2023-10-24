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
import DateTimePicker from './DateTimePicker/DateTimePicker';




const { Option } = Select;
const showrooms = [
  {
    value: 'san_francisco',
    label: 'San Francisco',
  },
  {
    value: 'cupertino',
    label: 'Cupertina',
  },
  {
    value: 'palo_alto',
    label: 'Palto Alto',
  },
  {
    value: 'livermore',
    label: 'Livermore',
  },
  {
    value: 'redwood_city',
    label: 'Redwood City',
  },
  {
    value: 'san_jose',
    label: 'San Jose',
  },
  {
    value: 'walnut_creek',
    label: 'Walnut Creek',
  },
  {
    value: 'monterey_bay',
    label: 'Monterey Bay',
  },
  
];
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
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['san_francisco', 'cupertino', 'palo_alto', 'livermore', 'redwood_city', 'san_jose', 'walnut_creek', 'monterey_bay'],
        prefix: '1',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      
      <Form.Item
        name="showroom"
        label="Showroom"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your showroom!',
          },
        ]}
      >
        <Cascader options={showrooms} />
      </Form.Item>


      <Form.Item
        name="timeslot"
        label="Time Slot"
        rules={[
          {
            required: true,
            message: 'Please select your time slot!',
          },
        ]}
      >
        <DateTimePicker></DateTimePicker>
      </Form.Item>


      <Form.Item
        name="intro"
        label="Intro"
        rules={[
          {
            required: false,
            message: 'Please input Intro',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
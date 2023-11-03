import React, { useState } from 'react';
import { Button, Form, Select, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const sizeOptions = ['Simple', 'Regular'];
const materialOptions = ['Material 1', 'Material 2', 'Material 3'];
const colorOptions = ['Color 1', 'Color 2', 'Color 3'];
const typeOptions = ['Repair', 'Replace', 'Clean'];

const App = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
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
      {/* ... (other form items) */}
      
      <Form.Item
        name="type"
        label="Type"
        rules={[
          {
            required: true,
            message: 'Please select Type',
          },
        ]}
      >
        <Select mode="multiple" placeholder="Select Type">
          {typeOptions.map(type => (
            <Option key={type} value={type}>{type}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input Description',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={300} />
      </Form.Item>


      <Form.Item
        name="upload"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={onFileChange}
        rules={[
          {
            required: true,
            message: 'Please upload Image',
          },
        ]}
      >
        <Upload
          fileList={fileList}
          beforeUpload={() => false} // prevent auto uploading
          onChange={onFileChange}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>


    </Form>
  );
};

export default App;

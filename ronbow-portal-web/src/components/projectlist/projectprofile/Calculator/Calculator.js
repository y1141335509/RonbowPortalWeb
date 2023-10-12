import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Radio, Menu, Dropdown, } from 'antd';
import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, 
  ToolOutlined, PrinterOutlined, MailOutlined, DownOutlined, 
} from '@ant-design/icons';




const handleEmailUs = () => {
  window.location.href = "mailto:example@gmail.com";
};

const handlePrint = () => {
  window.open("URL_TO_PDF", '_blank').print();
};

const handleDownload = () => {
  window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};

const menu = (
  <Menu>
     <Menu.Item key="1" onClick={handleDownload}>
      None: $0
    </Menu.Item>
    <Menu.Item key="2" onClick={handlePrint}>
      Basic: $299
    </Menu.Item>
    <Menu.Item key="3" onClick={handleEmailUs}>
      Premium: $599
    </Menu.Item>
   
  </Menu>
);



const PriceCalculator = () => {
  const [form] = Form.useForm();
  const [finalPrice, setFinalPrice] = useState(null);

  const onCalculate = () => {
    form.validateFields().then(values => {
      const { quote, customerDiscount, tradeProDiscount, tax, delivery } = values;
      const result = quote * (1 - customerDiscount/100 - tradeProDiscount/100) * (1 + tax/100) + delivery;
      setFinalPrice(result.toFixed(2));
    });
  };

  return (
    <Form form={form} layout="vertical" initialValues={{ quote: 60000 }}>
      <Form.Item label="Quote ($)" name="quote">
        <InputNumber disabled style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Customer Discount (%)" name="customerDiscount" initialValue={0}>
        <InputNumber min={0} max={100} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Trade Pro Discount (%)" name="tradeProDiscount" initialValue={0}>
        <InputNumber min={0} max={100} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Tax (%)" name="tax" initialValue={0}>
        <InputNumber min={0} max={100} style={{ width: '30%', marginRight: '4%', }} />
        <Radio.Group>
          <Radio.Button value>San Francisco</Radio.Button>
          <Radio.Button value="optional">Cupertino</Radio.Button>
          <Radio.Button value={false}>Palo Alto</Radio.Button>
          <Radio.Button value="2">Livermore</Radio.Button>
          <Radio.Button value="3">Redwood City</Radio.Button>
          <Radio.Button value="4">Walnut Creek</Radio.Button>
          <Radio.Button value="5">Monterey Bay</Radio.Button>
          <Radio.Button value="6">San Jose</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Delivery ($)" name="delivery" initialValue={0} style={{ float: 'left', }}>
        <InputNumber min={0} style={{ width: '50%', marginRight: '5%'}} />
        <Dropdown overlay={menu} trigger={['click']}>
        <Button 
          size='large' 
          icon={<DownOutlined />}
          style={{ backgroundColor: '#fff', color: '#5D6465', marginLeft: '10px', }}
        >
          Select Plan
        </Button>
      </Dropdown>
      </Form.Item>
      

      <br />
      
      <Button type="primary" onClick={onCalculate} style={{ backgroundColor: '#5D6465', color: '#F0ECEC', marginTop: '30px', }}>
        Calculate
      </Button>
      {finalPrice !== null && (
        <div style={{ marginTop: 16 }}>
          <h3>Final Price: ${finalPrice}</h3>
        </div>
      )}
    </Form>
  );
};

export default PriceCalculator;

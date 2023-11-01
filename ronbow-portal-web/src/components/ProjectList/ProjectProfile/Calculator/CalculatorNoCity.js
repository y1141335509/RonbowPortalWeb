import React, { useState } from 'react';
import {
  Form, Input, Button, InputNumber, Radio, Menu, Dropdown, ConfigProvider, Row, Col, Text,
  Tooltip, Select,
} from 'antd';
import {
  ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined,
  ToolOutlined, PrinterOutlined, MailOutlined, DownOutlined,
} from '@ant-design/icons';



const { Option } = Select;

const handleEmailUs = () => {
  document.getElementById('delivery-fee').value = '0';
  // window.location.href = "mailto:example@gmail.com";
};

const handlePrint = () => {
  // window.open("URL_TO_PDF", '_blank').print();
  document.getElementById('delivery-fee').value = '299';
};

const handleDownload = () => {
  document.getElementById('delivery-fee').value = '599';
  // window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={handleEmailUs}>
      None: $0
    </Menu.Item>
    <Menu.Item key="2" onClick={handlePrint}>
      Basic: $299
    </Menu.Item>
    <Menu.Item key="3" onClick={handleDownload}>
      Premium: $599
    </Menu.Item>

  </Menu>
);



const handleInstallation1 = () => {
  document.getElementById('installation-fee').value = '0';
  // window.location.href = "mailto:example@gmail.com";
};

const handleInstallation2 = () => {
  // window.open("URL_TO_PDF", '_blank').print();
  document.getElementById('installation-fee').value = '299';
};

const handleInstallation3 = () => {
  document.getElementById('installation-fee').value = '599';
  // window.open("https://cdn.ronbow.com/resources/Ronbow-Company-Profile-V6.pdf", '_blank');
};

const installation_menu = (
  <Menu>
    <Menu.Item key="1" onClick={handleInstallation1}>
      None: $0
    </Menu.Item>
    <Menu.Item key="2" onClick={handleInstallation2}>
      Basic: $299
    </Menu.Item>
    <Menu.Item key="3" onClick={handleInstallation3}>
      Premium: $599
    </Menu.Item>

  </Menu>
);



const PriceCalculator = () => {
  const [form] = Form.useForm();
  const [finalPrice, setFinalPrice] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [installationFee, setInstallationFee] = useState(0);


  const handleTaxChange = value => {
    form.setFieldsValue({ tax: value });
  };

  // const handleCityChange = (e) => {
  //   const cityTaxRates = {
  //     "Palo Alto": 9.875,
  //     "Cupertino": 9.125,
  //     "San Francisco": 8.625,
  //     "Redwood City": 9.875,
  //     "Livermore": 10.250,
  //     "San Jose": 10.5,
  //     "Walnut Creek": 9.125,
  //     "Monterey Bay": 9.5,
  //   };
  //   const selectedCity = e.target.value;
  //   document.getElementById('city-tax').value = cityTaxRates[selectedCity];
  // }

  const onCalculate = () => {
    form.validateFields().then(values => {
      const { quote, customerDiscount = 0, tradeProDiscount = 0, tax } = values;
      const taxRate = tax === "Regular" ? 9.875 : 0;
      const result = quote * (1 - customerDiscount / 100 - tradeProDiscount / 100) * (1 + taxRate / 100) + deliveryFee + installationFee;
      setFinalPrice(result.toFixed(2));
      console.log(quote, customerDiscount, tradeProDiscount, taxRate, result);
    });
  };



  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#5D6465',
          colorSuccess: '#F0ECEC',
        }
      }}
    >
      <Form form={form} layout="vertical" initialValues={{ quote: 60000, tax: 'Regular', customerDiscount: 0, tradeProDiscount: 0 }}>

        <Form.Item label="Quote ($)" name="quote">
          <InputNumber disabled style={{ width: '100%' }} />
        </Form.Item>

        <div style={{ textAlign: 'left', }}>

          

          
          <Row span={12}>
            <Col span={6}><Form.Item label="Trade Pro Discount (%)" name="tradeProDiscount" initialValue={0}>
            <InputNumber min={0} max={100} style={{ width: '80%', }} />
          </Form.Item></Col>

          <Col span={6}><Form.Item label="Customer Discount (%)" name="customerDiscount" initialValue={0}>
            <InputNumber min={0} max={15} style={{ width: '80%', }} />
          </Form.Item></Col>
          
          
            <Col span={6}>
              <br />
              <Button style={{ marginTop: '9px', }}>Request</Button>
            </Col>
          </Row>

        </div>
        <br />



        <Form.Item label="Tax Rate" name="tax" style={{ textAlign: 'left', }}>
          <Tooltip title="Tax rate based on the job site address">
            <Select style={{ width: '30%' }} onChange={handleTaxChange}>
            <Option value="Regular">Regular: 9.875%</Option>
            <Option value="Exempt">Exempt: 0%</Option>
            </Select>
          </Tooltip>
        </Form.Item>

        <Form.Item label="Delivery ($)" name="delivery" style={{ textAlign: 'left' }}>
          <span >$</span>
          <InputNumber min={0} style={{ width: '15%', marginRight: '2%', }} value={deliveryFee} disabled id={'delivery-fee'} />
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

        <Form.Item label="Installation ($)" name="installation" initialValue={0} style={{ textAlign: 'left' }}>
          <span >$</span>
          <InputNumber min={0} style={{ width: '15%', marginRight: '2%', }} disabled id={'installation-fee'} />
          <Dropdown overlay={installation_menu} trigger={['click']}>
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

    </ConfigProvider>
  );
};

export default PriceCalculator;

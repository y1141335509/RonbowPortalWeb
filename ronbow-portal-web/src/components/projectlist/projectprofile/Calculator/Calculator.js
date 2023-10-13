import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Radio, Menu, Dropdown, ConfigProvider, } from 'antd';
import { ExportOutlined, FilterOutlined, SearchOutlined, DownloadOutlined, 
  ToolOutlined, PrinterOutlined, MailOutlined, DownOutlined, 
} from '@ant-design/icons';




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



const PriceCalculator = () => {
  const [form] = Form.useForm();
  const [finalPrice, setFinalPrice] = useState(null);
  

  const handleCityChange = (e) => {
    const cityTaxRates = {
      "Palo Alto": 9.875,
      "Cupertino": 9.125,
      "San Francisco": 8.625,
      "Redwood City": 9.875,
      "Livermore": 10.250,
      "San Jose": 10.5,
      "Walnut Creek": 9.125,
      "Monterey Bay": 9.5,
    };
    const selectedCity = e.target.value;
    document.getElementById('city-tax').value = cityTaxRates[selectedCity];
  }

  const onCalculate = () => {
    form.validateFields().then(values => {
      const { quote, customerDiscount, tradeProDiscount, } = values;
      const tax = parseFloat(document.getElementById('city-tax').value);
      const delivery = parseFloat(document.getElementById('delivery-fee').value);
      const result = quote * (1 - customerDiscount/100 - tradeProDiscount/100) * (1 + tax/100) + delivery;
      setFinalPrice(result.toFixed(2));
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
          <InputNumber min={0} max={100}  id={'city-tax'}
            style={{ width: '20%', marginRight: '1%', float: 'left', }} 
            disabled />
          <Radio.Group onChange={handleCityChange} defaultValue='Cupertino' >
            <Radio.Button value="San Francisco">San Francisco</Radio.Button>
            <Radio.Button value="Cupertino" >Cupertino</Radio.Button>
            <Radio.Button value="Palo Alto">Palo Alto</Radio.Button>
            <Radio.Button value="Livermore">Livermore</Radio.Button>
            <Radio.Button value="Redwood City">Redwood City</Radio.Button>
            <Radio.Button value="Walnut Creek">Walnut Creek</Radio.Button>
            <Radio.Button value="Monterey Bay">Monterey Bay</Radio.Button>
            <Radio.Button value="San Jose">San Jose</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Delivery ($)" name="delivery" initialValue={0} style={{ float: 'left', }}>
          <span >$</span>
          <InputNumber min={0} style={{ width: '50%', marginRight: '2%', }} disabled id={'delivery-fee'} />
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

    </ConfigProvider>
  );
};

export default PriceCalculator;

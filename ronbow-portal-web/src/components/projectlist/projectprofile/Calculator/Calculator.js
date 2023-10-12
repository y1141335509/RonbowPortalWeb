import React, { useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

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
        <InputNumber min={0} max={100} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Delivery ($)" name="delivery" initialValue={0}>
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>
      <Button type="primary" onClick={onCalculate} style={{ backgroundColor: '#5D6465', color: '#F0ECEC'}}>
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

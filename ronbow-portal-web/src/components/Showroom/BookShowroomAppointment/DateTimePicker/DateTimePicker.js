import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const DateTimePicker = ({ onChange, ...props }) => {
  const handleChange = (moments, dateStrings) => {
    if (onChange) {
      // Ensure that the values passed to onChange are moment objects
      onChange(moments);
    }
  };

  return (
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={handleChange}
      {...props}
    />
  );
};

export default DateTimePicker;

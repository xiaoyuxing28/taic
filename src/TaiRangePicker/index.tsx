import { DatePicker } from 'antd';
import React from 'react';
import './index.less'
const date_picker = require('../assets/images/date_picker.png') 
const { RangePicker } = DatePicker

export const TaiRangePicker: React.FC = (props) => <RangePicker suffixIcon={<img src={date_picker} className="date_picker-img" />} separator="至" className="datepick" allowClear={false}
    inputReadOnly={true}  {...props} />;


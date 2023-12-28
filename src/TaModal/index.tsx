import {  Modal } from 'antd';
import React from 'react';
const closeIcon = require('../assets/images/close.svg')
import './index.less'
export const TaModal: React.FC = (props) => <Modal closeIcon={<img src={closeIcon} />} {...props} ></Modal>;

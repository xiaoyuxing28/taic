import React from 'react';
import { Breadcrumb  } from 'antd';
import './index.less'
import { CaretRightOutlined } from '@ant-design/icons';



export const TaiBreadcrumb: React.FC = (props) => <Breadcrumb  separator={ <CaretRightOutlined className="fc-separator" />}  {...props} />;

import React from 'react';
import { Pagination } from 'antd';
import { CaretRightFilled, CaretLeftFilled } from '@ant-design/icons'
import type { PaginationProps } from 'antd'
import './index.less'
const itemRender: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement,
) => {
  if (type === 'prev') {
    return (
      <a>
        <CaretLeftFilled style={{ fontSize: 14 }} />
      </a>
    )
  }
  if (type === 'next') {
    return (
      <a>
        <CaretRightFilled style={{ fontSize: 14 }} />
      </a>
    )
  }
  return originalElement
}
export const TaiPagination: React.FC = (props) => <Pagination   showTotal={(total, range) => `共${total}条`} itemRender={itemRender} {...props}/>;





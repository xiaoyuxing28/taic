import { Image as Myimage } from 'antd';
import React from 'react';
import './index.less'

export const TaiNewsCard = (props: any) => {
  const { cardInfoItem } = props;
  return (
    <>
      {cardInfoItem.map((item: any, index: number) => {
        return (
          <div
            className='userCard'
            key={index}
            onClick={() => {
              window.open(item.url);
            }}
          >
            <Myimage
              src={item.src}
              className="m-0"
              preview={false}
              style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
            ></Myimage>
            <div className='content'>
              <div className='title'>
                {item.title}
              </div>
              <div className='text'>
                {item.desc}
              </div>
              <div className='time'>{item.time}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

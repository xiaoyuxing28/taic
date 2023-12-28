import React from 'react';
import './index.less'

const src = require('../assets/images/yesterday.png') 
interface Type {
    icon: string
    mainTitle: string
    classname?: string
    style?:any
    children?: any
    operate?: string
}


export const TaiMsgCard = (props: Type) => {
    const { icon=src, mainTitle, classname = '', children, operate,style} = props
    
    return <div className={`msgCard ${classname}`} style={style}>
        <img src={icon} />
        <div className='desc'>
            <div className='mainTitle'>{mainTitle}</div>
            <div >{children}</div>
        </div>
        {
            operate && operate
        }
    </div>
};

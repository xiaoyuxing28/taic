import React from 'react';
import './index.less'
const src = require('../assets/images/yesterday.png') 
interface Type {
    icon: string
    mainTitle: string
    viceTitle: string
    data: string | number
    classname?:string

}


export const TaiCard = (props: Type) => {
    const { icon=src, viceTitle, data, mainTitle ,classname=''} = props

    return <div className={`card ${classname}`}>
        <img src={icon} />
        <div className='desc'>
            <div>{mainTitle}</div>
            <div>{viceTitle}</div>
        </div>
        <div className='num'>{data}</div>
    </div>
};

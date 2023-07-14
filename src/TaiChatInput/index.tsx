
import React, { useState } from 'react'
import { TaiTextarea } from 'taic'
import { TaiRecordIcon } from 'taic'
import { Button } from 'antd'
import './index.less'

export const TaiChatInput = (props: any) => {
  const { wsUrl, onChange, onEnter, maxLength, showCount, setInput, input, componentsTextareaProps } = props
  return <div className='container'>
    <TaiTextarea style={{ resize: 'none', paddingRight: '80px', background: 'rgba(217, 217, 217, 0.4)' }} {...componentsTextareaProps} value={input} maxLength={maxLength} showCount={showCount} onChange={onChange} onPressEnter={onEnter}></TaiTextarea>
    <div className="recordIcon"> <TaiRecordIcon  wsUrl={wsUrl} setInput={setInput} input={input} /></div>
  </div>
}
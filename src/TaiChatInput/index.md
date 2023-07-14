# TaiChatInput

这是 TaiChatInput demo

```jsx
import { TaiChatInput } from 'taic'
import React, { useState,useEffect } from 'react'
const VITE_APP_ASR_WS_URL = 'wss://asr-gd.wair.ac.cn'
export default () => {
const [input, setInput] = useState('') 

useEffect(()=>{
    console.log(input)
    setInput(input)
},[input])

 const onChange = (e) => {
   setInput(e.target.value)
}


  const onEnter = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    console.log('value',e.target.value)
  }

const componentsTextareaProps = {}

    return <TaiChatInput  componentsTextareaProps={componentsTextareaProps} wsUrl={ VITE_APP_ASR_WS_URL} input={input} onChange={onChange} onEnter={onEnter} maxLength="1000" showCount={true} setInput={setInput}
     input={input}/>
}

```

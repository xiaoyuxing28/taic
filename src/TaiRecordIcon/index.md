
# TaiRecordIcon

这是 语音转文本 的 demo

```jsx
import React, { useState ,useEffect } from 'react'
import { TaiRecordIcon } from 'taic'; 
const VITE_APP_ASR_WS_URL = 'wss://asr-gd.wair.ac.cn'

export default () => {
const [input, setInput] = useState('') 

useEffect(()=>{
    console.log(input)
    setInput(input)
},[input])

    return <TaiRecordIcon wsUrl={VITE_APP_ASR_WS_URL} input={input} setInput={setInput}></TaiRecordIcon>;
}
```

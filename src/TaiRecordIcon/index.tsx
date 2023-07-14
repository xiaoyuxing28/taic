import React, {
    useState
} from 'react'

import './index.less'
import { Button } from 'antd'
import {
    AudioOutlined,
} from '@ant-design/icons' 
// @ts-ignore
import icon from './union.svg'
// @ts-ignore
import useRecorder from '../hooks/useRecorder' 

export const TaiRecordIcon = (props: any) => {
    const { wsUrl, union ,input ,setInput} = props ;
    const [recordText, setRecordText] = useState('')
    const { recStatus, recOpen, recStop } = useRecorder(
        wsUrl,
        {
          onOpen: () => {
            setInput('')
            setRecordText('')
          },
          onMessage: (data: any) => {
            parseAsrResult(data)
          },
          onClose: (event: any) => {
            if (input?.endsWith(',')) {
              const text = input.slice(0, -1)
              setInput(text)
            }
          },
        }
      )

      const parseAsrResult = (data: any) => {
        let sentence = ''
        if (data.type === 'partial_result') {
          let nbest = JSON.parse(data.nbest)
          sentence = nbest[0]?.sentence
          if (nbest.length > 0) {
            setInput(recordText ? recordText + ',' + sentence : sentence)
          }
        }
        if (data.type === 'final_result') {
          let nbest = JSON.parse(data.nbest)
          sentence = nbest[0]?.sentence
          if (nbest.length > 0) {
            setInput(recordText ? recordText + ',' + sentence : sentence)
            setRecordText(recordText ? recordText + ',' + sentence : sentence)
          }
        }
        if (data.type === 'speech_end') {
          if (input?.endsWith(',')) {
            const text = input.slice(0, -1)
            setInput(text)
          }
        }
      }

    return <div className="TaiRecordIcon">
        <div className='record'>
            <div style={{display:'flex',padding:'10px',boxSizing:'border-box'}}>
                <div
                    className="audio-wave"
                    style={{
                        visibility: recStatus === 'start' ? 'visible' : 'hidden',
                        marginRight: '5px',
                        width: '48px',
                        height: '24px',
                    }}
                />
                <Button
                    className="cursor-pointer"
                    icon={
                        recStatus === 'start' ? (
                            <img src={union || icon} />
                        ) : (
                            <AudioOutlined />
                        )
                    }
                    type="default"
                    style={{
                        border: 'none',
                        color: '#595959',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => {
                        recStatus === 'start' ? recStop() : recOpen()
                    }}
                />
            </div>
        </div>
    </div>
}
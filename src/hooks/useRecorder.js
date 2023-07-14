import { useEffect, useRef, useState } from 'react'
import { useWebSocket } from 'ahooks'
import Recorder from 'recorder-core'
// import 'recorder-core/src/engine/pcm'
// import 'recorder-core/src/engine/wav'
import 'recorder-core/src/extensions/waveview'

Recorder.TrafficImgUrl = ''

const asrConfig = {
  type: 'unknow',
  sampleRate: 16000,
  bitRate: 16,
}

export default function useRecorder(url, { onOpen, onMessage, onClose }) {
  const [recStatus, setRecStatus] = useState('stop')
  const { sendMessage, disconnect, connect, readyState } = useWebSocket(url, {
    manual: true,
    onOpen(event, instance) {
      instance.send(
        JSON.stringify({ signal: 'start', nbest: 1, continuous_decoding: true })
      )
      onOpen()
    },
    onMessage(message, instance) {
      const data = JSON.parse(message.data)
      if (data.type === 'speech_end') {
        disconnect()
      }
      onMessage(data, instance)
    },
    onClose(event, instance) {
      onClose(event, instance)
    },
    onError(event, instance) {
      console.log('onError event =>', event)
    },
  })
  const rec = useRef(null)
  const fragment = useRef(0)
  const wave = useRef(null)

  const onProcess = (
    buffers,
    powerLevel,
    bufferDuration,
    bufferSampleRate,
    newBufferIdx,
    asyncEnd
  ) => {
    let chunk = Recorder.SampleData(
      buffers,
      bufferSampleRate,
      asrConfig.sampleRate
    )
    let data = chunk.data.slice(fragment.current)
    fragment.current = chunk.data.length
    sendMessage(data)
    // 可视化图形绘制
    wave.current?.input(buffers[buffers.length - 1], powerLevel, bufferSampleRate)
  }

  const recOpen = () => {
    rec.current = Recorder({
      type: asrConfig.type,
      sampleRate: asrConfig.sampleRate,
      bitRate: asrConfig.bitRate,
      onProcess,
    })
    wave.current = Recorder.WaveView({ elem: '.audio-wave', width: 32, heigth: 32, keep: false })
    rec.current.open(
      () => {
        console.log('== 录音已开启 ==')
        setRecStatus('start')
        connect()
        rec.current.start()
      },
      (msg, isUserNotAllow) => {
        console.log('== 无录音权限 ==', { isUserNotAllow, msg })
        setRecStatus('stop')
      }
    )
  }

  const recStop = () => {
    rec.current.close()
    fragment.current = 0
    setRecStatus('stop')
    sendMessage(
      JSON.stringify({
        signal: 'end',
      })
    )
  }

  return {
    recStatus,
    recOpen,
    recStop,
  }
}

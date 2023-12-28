# TaModal

这是 TaModal 的 demo

```jsx
import { TaModal ,TaiButton} from 'taic';
import {useState} from 'react'
export default () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return <>
      <TaiButton type="primary" onClick={showModal}>
        Open Modal
      </TaiButton>
      <TaModal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} closeIcon="">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </TaModal>
    </>
}  
```

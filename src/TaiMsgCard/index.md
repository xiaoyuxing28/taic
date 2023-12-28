# TaiMsgCard

这是 TaiMsgCard 的 demo

```jsx
import { TaiMsgCard } from 'taic';
import { EditOutlined } from '@ant-design/icons'
export default () => <TaiMsgCard mainTitle='主标题'  classname="TaiMsgCard" operate={<EditOutlined style={{ fontSize: 14 ,cursor: 'pointer'}} />}>
                        <div style={{fontSize:12,color: 'rgb(102, 112, 133)'}}> 
                            <div>姓名:好大一只鱼</div>
                            <div>姓名:好大一只鱼</div>
                            <div>姓名:好大一只鱼</div>
                        </div>
                      
                     </TaiMsgCard>;
```

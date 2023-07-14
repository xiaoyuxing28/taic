
# TaiNewsCard

这是 新闻卡片 的 demo

```jsx
import { TaiNewsCard } from 'taic';
const cardInfoItem = [
  {
    id: 1,
    title: '新闻标题',
    desc: '新闻简介',
    time: '2023.04.11',
    url: 'https://www.baidu.com',
    src: 'https://wair-official-web.obs.cn-central-221.ovaijisuan.com/images/index/image_224.jpg',
  },
];
export default () => <TaiNewsCard cardInfoItem={cardInfoItem}></TaiNewsCard>;
```

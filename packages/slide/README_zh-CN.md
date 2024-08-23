# @better-scroll/slide

实现轮播图的效果。

## 使用

```js
import BScroll from 'tz-better-scroll-core'
import Slide from 'tz-better-scroll-slide'
BScroll.use(Slide)

const bs = new BScroll('.div', {
  scrollX: false,
  scrollY: true,
  slide: {
    loop: true,
    threshold: 100
  },
  useTransition: true,
  momentum: false,
  bounce: false,
  stopPropagation: true
})
```

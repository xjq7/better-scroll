# @better-scroll/mouse-wheel

允许鼠标滚轮来操纵滚动行为。

## 使用

```js
import BScroll from 'tz-better-scroll-core'
import MouseWheel from 'tz-better-scroll-mouse-wheel'
BScroll.use(MouseWheel)

const bs = new BScroll('.wrapper', {
  // ...
  mouseWheel: {
    speed: 2,
    invert: false,
    easeTime: 300,
  }
})
```

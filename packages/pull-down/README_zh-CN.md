# @better-scroll/pull-down

为 BetterScroll 注入下拉刷新的能力。

## 使用

```js
import BScroll from 'tz-better-scroll-core'
import Pulldown from 'tz-better-scroll-pull-down'
BScroll.use(Pulldown)

const bs = new BScroll('.wrapper', {
  pullDownRefresh: true
})
```

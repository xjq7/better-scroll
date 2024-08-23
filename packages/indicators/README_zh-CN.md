# @better-scroll/indicators

指示器，可用来实现放大镜、视觉滚动等效果。

## 使用

```js
import BScroll from 'tz-better-scroll-core'
import Indicators from 'tz-better-scroll-indicators'
BScroll.use(Indicators)

const bs = new BScroll('.wrapper', {
  indicators: [
    relationElement: someHTMLElement
  ]
})
```

```ts
interface IndicatorOptions {
  interactive?: boolean
  ratio?: Ratio
  relationElementHandleElementIndex?: number
  relationElement: HTMLElement
}
```

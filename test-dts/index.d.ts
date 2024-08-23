import BScroll from 'tz-better-scroll-core'
import Zoom from 'tz-better-scroll-zoom'
import Wheel from 'tz-better-scroll-wheel'
import Slide from 'tz-better-scroll-slide'
import ScrollBar from 'tz-better-scroll-scroll-bar'
import PullUp from 'tz-better-scroll-pull-up'
import PullDown from 'tz-better-scroll-pull-down'
import ObserveDom from 'tz-better-scroll-observe-dom'
import NestedScroll from 'tz-better-scroll-nested-scroll'
import MouseWheel from 'tz-better-scroll-mouse-wheel'
import Infinity from 'tz-better-scroll-infinity'
import Movable from 'tz-better-scroll-movable'
import { IfEquals } from './util'

export * from 'tz-better-scroll-core'
export * from 'tz-better-scroll-zoom'
export * from 'tz-better-scroll-wheel'
export * from 'tz-better-scroll-slide'
export * from 'tz-better-scroll-scroll-bar'
export * from 'tz-better-scroll-pull-up'
export * from 'tz-better-scroll-pull-down'
export * from 'tz-better-scroll-observe-dom'
export * from 'tz-better-scroll-nested-scroll'
export * from 'tz-better-scroll-mouse-wheel'
export * from 'tz-better-scroll-infinity'
export * from 'tz-better-scroll-movable'

export type ArgumentsCheck<
  T extends any[],
  U extends (...args: any[]) => any
> = (
  ...args: any[]
) => U extends (...args: infer P) => any
  ? IfEquals<T, P, ReturnType<U>, T>
  : never
export type ReturnValueCheck<T, U extends (...args: any[]) => any> = (
  ...args: any[]
) => U extends (...args: any[]) => infer P ? IfEquals<T, P, P, T> : never
export declare function expectType<T, T1 extends IfEquals<T, T1, T, T>>(): void
export declare function expectError<T>(value: T): void
export declare function expectAssignable<T1 extends T, T>(): void
export declare function expectFuncArguments<
  T extends any[],
  T1 extends ArgumentsCheck<T, T1>
>(): void
export declare function expectFuncReturnValue<
  T,
  T1 extends ReturnValueCheck<T, T1>
>(): void

export {
  BScroll,
  Zoom,
  Wheel,
  Slide,
  ScrollBar,
  PullUp,
  PullDown,
  ObserveDom,
  NestedScroll,
  MouseWheel,
  Infinity,
  Movable,
}

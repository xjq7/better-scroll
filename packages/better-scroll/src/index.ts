import BScroll from 'tz-better-scroll-core'
import MouseWheel from 'tz-better-scroll-mouse-wheel'
import ObserveDom from 'tz-better-scroll-observe-dom'
import PullDownRefresh from 'tz-better-scroll-pull-down'
import PullUpLoad from 'tz-better-scroll-pull-up'
import ScrollBar from 'tz-better-scroll-scroll-bar'
import Slide from 'tz-better-scroll-slide'
import Wheel from 'tz-better-scroll-wheel'
import Zoom from 'tz-better-scroll-zoom'
import NestedScroll from 'tz-better-scroll-nested-scroll'
import InfinityScroll from 'tz-better-scroll-infinity'
import Movable from 'tz-better-scroll-movable'
import ObserveImage from 'tz-better-scroll-observe-image'
import Indicators from 'tz-better-scroll-indicators'

export {
  createBScroll,
  BScrollInstance,
  Options,
  CustomOptions,
  TranslaterPoint,
  MountedBScrollHTMLElement,
  Behavior,
  Boundary,
  CustomAPI,
} from 'tz-better-scroll-core'

export {
  MouseWheel,
  ObserveDom,
  PullDownRefresh,
  PullUpLoad,
  ScrollBar,
  Slide,
  Wheel,
  Zoom,
  NestedScroll,
  InfinityScroll,
  Movable,
  ObserveImage,
  Indicators,
}

BScroll.use(MouseWheel)
  .use(ObserveDom)
  .use(PullDownRefresh)
  .use(PullUpLoad)
  .use(ScrollBar)
  .use(Slide)
  .use(Wheel)
  .use(Zoom)
  .use(NestedScroll)
  .use(InfinityScroll)
  .use(Movable)
  .use(ObserveImage)
  .use(Indicators)

export default BScroll

import {trigger} from '@angular/animations';
import {slideRightAnimation} from './slide-right.animation';
import {getMainStateChangeExpr} from './route-animation';
import {slideLeftAnimation} from './slide-left.animation';
import {slideTopAnimation} from './slide-top.animation';
import {slideBottomAnimation} from './slide-bottom.animation';

export const routesTrigger = trigger('routeAnimations', [
  slideRightAnimation(getMainStateChangeExpr().bottom, '300ms'),
  slideLeftAnimation(getMainStateChangeExpr().top, '300ms'),
  slideTopAnimation('* => OnTop, OnBottom => *', '300ms'),
  slideBottomAnimation('* => OnBottom, OnTop => *', '300ms'),
]);

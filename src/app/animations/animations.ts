import {trigger} from '@angular/animations';
import {getMainStateChangeExpr} from './route-animation';
import {slideRightAnimation} from './slide-right.animation';
import {slideLeftAnimation} from './slide-left.animation';
import {slideTopAnimation} from './slide-top.animation';
import {slideBottomAnimation} from './slide-bottom.animation';

const duration = '300ms';

const mainStateChangeExpr = getMainStateChangeExpr();

export const animations =
  trigger('routeAnimations', [
    slideRightAnimation(mainStateChangeExpr.bottom, duration),
    slideLeftAnimation(mainStateChangeExpr.top, duration),
    slideTopAnimation('* => OnTop, OnBottom => *', duration),
    slideBottomAnimation('* => OnBottom, OnTop => *', duration),
  ]);

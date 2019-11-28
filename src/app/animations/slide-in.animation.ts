import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';
import {APP_ROUTES} from '../app-routing.module';


const duration = '300ms';
const routes = APP_ROUTES
  .map((r) => {
  return r.data ? {
      index: r.data.index,
      name: r.data.animation,
  } : false;
}).filter(r => r);

console.log(JSON.stringify(routes));

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Index <=> Learn, Learn <=> Blog, Blog <=> Music, Learn <=> Music, Index <=> Blog, Blog <=> Music, Index <=> Music', [
      style({position: 'relative', overflow: 'hidden'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate(`${duration} ease-out`, style({left: '100%'})),
        ]),
        query(':enter', [
          animate(`${duration} ease-out`, style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [
        style({left: '-100%'}),
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({left: '100%'})),
        ]),
        query(':enter', [
          animate(`${duration} ease-out`, style({left: '0%'})),
        ]),
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

import {animate, animateChild, group, query, style, transition} from '@angular/animations';

export function slideRightAnimation(stateChangeExpr: string, duration: string) {
  return transition(stateChangeExpr, [
    style({position: 'relative', overflow: 'hidden'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
      }),
    ]),
    query(':enter', [
      style({left: '-100%'}),
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(`${duration} ease-out`, style({left: '100%'})),
      ]),
      query(':enter', [
        animate(`${duration} ease-out`, style({left: '0%'})),
      ]),
    ]),
    query(':enter', animateChild()),
  ]);
}

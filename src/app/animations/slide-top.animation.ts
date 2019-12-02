import {animate, animateChild, group, query, style, transition} from '@angular/animations';

export function slideTopAnimation(stateChangeExpr: string, duration: string) {
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
      style({top: '100%'}),
    ]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate(`${duration} ease-out`, style({top: '-100%'})),
      ], { optional: true }),
      query(':enter', [
        animate(`${duration} ease-out`, style({top: '0'})),
      ]),
    ]),
    query(':enter', animateChild()),
  ]);
}

import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
      })
    ]),
    query(':enter', [
      animate('600ms ease',
        style({opacity: 1})
      )
    ])
  ])
])

export const slider = trigger('routeAnimations', [

  transition('1 => 2', slideTo('right')),
  transition('1 => 3', slideTo('right')),
  transition('2 => 3', slideTo('right')),
  transition('* => 4', slideTo('right')),

  transition('* => 1', slideTo('left')),
  transition('3 => 2', slideTo('left')),
  transition('4 => 2', slideTo('left')),
  transition('4 => 3', slideTo('left')),
  
])

function slideTo(direction: string){
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%' }))
      ], optional),
    ]),
  ];
}
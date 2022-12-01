import {
  concatMap,
  exhaustMap,
  fromEvent,
  interval,
  switchMap,
  take,
} from "rxjs";

const interval$ = interval(200).pipe(take(5));

const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);

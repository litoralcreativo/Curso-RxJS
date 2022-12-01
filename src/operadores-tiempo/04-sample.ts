import { fromEvent, interval, map, sample, sampleTime } from "rxjs";

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, "click");

interval$.pipe(sample(click$)).subscribe(console.log);

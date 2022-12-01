import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  map,
  asyncScheduler,
} from "rxjs";

/* const click$ = fromEvent(document, "click");
click$.pipe(throttleTime(1000)).subscribe(console.log); */

const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    map((x: any) => x.target?.value),
    distinctUntilChanged()
  )
  .subscribe(console.log);

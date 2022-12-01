import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
  tap,
} from "rxjs";

/* const click$ = fromEvent(document, "click");
click$.pipe(debounceTime(1000)).subscribe(console.log);
 */
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
input$
  .pipe(
    debounceTime(1000),
    map((x: any) => x.target?.value),
    distinctUntilChanged()
  )
  .subscribe(console.log);

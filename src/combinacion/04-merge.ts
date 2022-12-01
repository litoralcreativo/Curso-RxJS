import { fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<MouseEvent>(document, "click");

merge(
  keyup$.pipe(map((x) => x?.type)),
  click$.pipe(map((x) => x?.type))
).subscribe(console.log);

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(500);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  of("a", "b")
).subscribe(console.log);

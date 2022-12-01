import { log } from "console";
import { range, map, tap } from "rxjs";

const numeros$ = range(1, 5);
numeros$
  .pipe(
    tap((x) => log("antes de map", x)),
    map((x: number) => {
      return 2 * x;
    }),
    tap({
      next: (x) => log("despues de map", x),
      complete: () => log("se completo"),
    })
  )
  .subscribe(log);

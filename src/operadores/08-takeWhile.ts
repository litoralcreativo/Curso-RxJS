import { first, of, take, takeWhile, tap } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(takeWhile((x) => x < 4)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

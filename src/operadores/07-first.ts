import { first, take, tap, of } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(first()).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

import { distinctUntilChanged, of } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 4, 4, 4, 1, 2, 2, 2, 1, 3, 4, 5);

numeros$.pipe(distinctUntilChanged()).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

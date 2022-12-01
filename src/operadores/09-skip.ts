import { of, skip } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(skip(2)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

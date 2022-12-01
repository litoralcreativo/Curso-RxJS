import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5);
//const obs$ = of([1, 2], { a: 1, b: 2 }, () => true, Promise.resolve(false));

console.log("Inicio del obs");
obs$.subscribe(
  (next) => console.log("next", next),
  (err) => null,
  () => console.log("Terminamos la secuencia")
);
console.log("Fin del obs");

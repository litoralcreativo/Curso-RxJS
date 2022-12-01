import { range, of, asyncScheduler } from "rxjs";

const src$ = range(1, 5, asyncScheduler);

console.log("Inicio");
src$.subscribe((res) => console.log(res));
console.log("Fin");

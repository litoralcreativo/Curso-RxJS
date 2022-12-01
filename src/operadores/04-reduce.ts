import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acumulador: number, actual: number) => {
  return acumulador + actual;
};

const total = numbers.reduce(totalReducer, 0);
console.log("total: ", total);

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer, 5))
  .subscribe({
    next: (res) => console.log("Next: ", res),
    complete: () => console.log("Complete"),
  });

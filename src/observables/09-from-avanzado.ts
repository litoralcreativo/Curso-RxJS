import { of, from, Observable, Observer } from "rxjs";

/**
 * of = toma argumentos y genera una secuenca
 * from = array, promise, iterable, observable
 */

/* const observer: Partial<Observer<any>> = {
  next: (val) => console.log("next: ", val),
};

// const source$: Observable<any> = from([1, 2, 3, 4, 5]);
const source$: Observable<any> = from(
  fetch("https://api.github.com/users/litoralcreativo")
); */

/* console.log("inicio");
source$.subscribe(observer);
console.log("fin");
 */
const generador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = generador();

/* for (let num of iterable) {
  console.log(num);
}
 */

from(iterable).subscribe((res) => console.log(res));

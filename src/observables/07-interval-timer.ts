import { interval, timer } from "rxjs";

const src1$ = interval(1000);
const src2$ = timer(2000, 1000);

const observer = {
  next: (res) => console.log("next:", res),
  complete: () => console.log("complete"),
};

console.log("inicio");
//src1$.subscribe(observer);

src2$.subscribe(observer);
console.log("fin");

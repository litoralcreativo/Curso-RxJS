import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
  next: (value) => {
    console.log("next" + value);
  },
  error: (err) => {
    console.error("error", err);
  },
  complete: () => {
    console.error("complete");
  },
};

const intervalo$ = new Observable<number>((suscriber) => {
  let num = 0;
  let interval = setInterval(() => {
    suscriber.next(num);
    console.log(num++);
  }, 1000);

  setTimeout(() => {
    suscriber.complete();
  }, 3000);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido..");
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2.add(subscription3));

setTimeout(() => {
  subscription1.unsubscribe();
}, 6000);

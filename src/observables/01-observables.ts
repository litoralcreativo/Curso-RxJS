import { Observable, Observer } from "rxjs";

// const obs$ = Observable.create();
const obs$ = new Observable<string>((suscriber) => {
  suscriber.next("Hola");
  suscriber.next("Mundo");
  suscriber.next("Hola");
  suscriber.next("Mundo");
  suscriber.complete();
  suscriber.next("Cerrado..");
});

const observer: Observer<string> = {
  next: (value) => {
    console.log("siguiente [next]" + value);
  },
  error: (err) => {
    console.error("error [obs]", err);
  },
  complete: () => {
    console.error("completed [obs]");
  },
};

obs$.subscribe(observer);

/* obs$.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.error("err", err);
  },
  complete: () => {
    console.error("completed...");
  },
});
 */

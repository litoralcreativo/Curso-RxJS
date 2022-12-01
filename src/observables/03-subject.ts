import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
  next: (value) => {
    console.log("[next] " + value);
  },
  error: (err) => {
    console.error("[error] ", err);
  },
  complete: () => {
    console.error("[complete]");
  },
};

const intervalo$ = new Observable<number>((suscriber) => {
  const intervalID = setInterval(() => {
    suscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log("interval cleared..");
  };
});

/**
 * 1- casteo multiple
 * 2- tambien es un observer
 * 3- next, error y complete
 */
const subject$ = new Subject();
const subs_subject = intervalo$.subscribe(subject$);

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subs_subject.unsubscribe();
}, 6000);

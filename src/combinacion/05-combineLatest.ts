import { combineLatest, fromEvent, map } from "rxjs";

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";
input2.placeholder = "************";
input2.type = "password";

document.querySelector("body").append(input1, input2);

/* const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const click$ = fromEvent<MouseEvent>(document, "click"); */

// Helper
const getInputString = (element: HTMLElement) => {
  return fromEvent<KeyboardEvent>(element, "keyup").pipe(
    map<KeyboardEvent, string>((event: KeyboardEvent) => event.target["value"])
  );
};
combineLatest(getInputString(input1), getInputString(input2)).subscribe(
  console.log
);

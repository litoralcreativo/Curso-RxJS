import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const peticionHttpLogin = (userPass: { email: string; password: string }) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    map((res) => res.response["token"]),
    catchError((err) => of("xxx"))
  );

// Creando un fromulario
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// configuraciones
inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Pasword";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  //mergeMap(peticionHttpLogin)
  //switchMap(peticionHttpLogin)
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => {
  console.log(token);
});

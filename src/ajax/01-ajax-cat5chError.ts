import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
const url = "https://dummyjson.com/products";

/* const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const fetchPromesa = fetch(url); */

const manejaErrores = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};

// fetchPromesa
//   .then((res) => res.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("error en usuarios: ", err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((res) => res.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("error en usuarios: ", err));

ajax(url)
  .pipe(
    map((x) => x.response),
    catchError(manejaErrores)
  )
  .subscribe(console.log);

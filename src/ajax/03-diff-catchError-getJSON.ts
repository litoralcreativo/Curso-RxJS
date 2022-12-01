import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1asd1";

const manejaError = (resp: AjaxError) => {
  console.warn("error:", resp.message);
  return of({
    ok: false,
    ususarios: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("getJSON: ", data));
// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("ajax: ", data));

obs$.pipe(catchError(manejaError)).subscribe({
  next: (res) => console.log("next:", res),
  error: (err) => console.warn("error en el subs:", err),
  complete: () => console.log("Complete"),
});

// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("ajax: ", data));

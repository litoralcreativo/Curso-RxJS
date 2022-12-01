import { endWith, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Cargando...";

const body = document.querySelector("body");
body.append(loadingDiv);

// Stream
ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true), endWith(false))
  .subscribe({
    next: (resp) => {
      if (resp === true) loadingDiv.style.display = "auto";
      else loadingDiv.style.display = "none";
      console.log(resp);
      console.log(document.querySelector(".loading"));
    },
  });

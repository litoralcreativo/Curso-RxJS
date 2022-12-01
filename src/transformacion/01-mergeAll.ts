import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  GithubUser,
  GithubUsersResp,
} from ".././interfaces/github-users.interface";

const url = "https://httpbin.org/delay/1";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = "";
  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = usuario.avatar_url;
    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver pagina";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>((res) => res.target["value"]),
    map<string, Observable<GithubUsersResp>>((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    map((res) => res["items"])
  )
  .subscribe(mostrarUsuarios);

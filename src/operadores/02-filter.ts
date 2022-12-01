import { log } from "console";
import { from, fromEvent, of, range, map, filter } from "rxjs";

/* range(1, 10)
  .pipe(
    filter((f, i) => {
      console.log("index: ", i);
      return f % 2 === 0;
    })
  )
  .subscribe(console.log);
 */

interface Personaje {
  tipo: "heroe" | "villano";
  nombre: string;
}

/* const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "villano"))
  .subscribe(log); */

const superman: Personaje = {
  tipo: "heroe",
  nombre: "Superman",
};

const super$ = of(superman).pipe(
  map((x) => x.nombre),
  filter((x) => x.includes("Super"))
);
super$.subscribe(log);

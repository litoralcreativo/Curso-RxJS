import { from, fromEvent, range, map, mapTo, pluck } from "rxjs";

/* range(1, 5)
  .pipe(map<number, string>((x) => String(x * 10)))
  .subscribe(console.log); */
/* 
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupPluck$ = keyup$.pipe();

keyupCode$.subscribe((code) => console.log("map", code));
 */
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  padre?: Persona;
}

const per: Persona = {
  nombre: "Gaston",
  apellido: "Chatelet",
  edad: 33,
  padre: { nombre: "Daniel Eduardo Enrique", apellido: "Chatelet", edad: 60 },
};
const persona$ = from([per]);

const personaPluck$ = persona$.pipe(pluck("padre", "edad"));
const personaMapTo$ = persona$.pipe(mapTo("map to realizado"));

personaPluck$.subscribe((code) => console.log("pluck", code));
personaMapTo$.subscribe((code) => console.log("mapTo", code));

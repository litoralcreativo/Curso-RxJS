import { distinct, from, of, skip } from "rxjs";

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Superman" },
  { nombre: "Robin" },
  { nombre: "Robin" },
  { nombre: "Megaman" },
  { nombre: "Gatubela" },
];

const personajes$ = from(personajes);

personajes$.pipe(distinct((p) => p.nombre)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

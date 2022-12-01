import { distinct, distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "Megaman" },
  { nombre: "Superman" },
  { nombre: "Robin" },
  { nombre: "Robin" },
  { nombre: "Superman" },
  { nombre: "Megaman" },
  { nombre: "Gatubela" },
];

const personajes$ = from(personajes);

personajes$.pipe(distinctUntilKeyChanged("nombre")).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("complete"),
});

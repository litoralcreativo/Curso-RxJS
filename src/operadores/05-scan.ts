import { reduce, scan, take, tap, map, from, interval, pipe } from "rxjs";

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acc: number, cur: number) => acc + cur;

/* interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer, 5))
  .subscribe({
    next: (res) => console.log("Next: ", res),
    complete: () => console.log("Complete"),
  });
 */

// reduce
//from(numbers).pipe(reduce(totalReducer, 0)).subscribe(console.log);

// scan
//from(numbers).pipe(scan(totalReducer, 0)).subscribe(console.log);

// redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const users: Usuario[] = [
  { id: "gas", autenticado: false, token: null },
  { id: "gas", autenticado: true, token: "ABC" },
  { id: "gas", autenticado: true, token: "ABC123" },
];

const state$ = from(users).pipe(scan<Usuario>((a, c) => ({ ...a, ...c })));

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);

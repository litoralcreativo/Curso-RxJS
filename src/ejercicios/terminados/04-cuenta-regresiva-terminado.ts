import { endWith, interval, map, take, takeWhile } from "rxjs";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() => {
  const inicio = 7;
  const countdown$ = interval(200).pipe(
    map((x) => 7 - x),
    take(8)
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();

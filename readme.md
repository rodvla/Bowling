## 🎳 Descripción del Problema

Crea un programa que, dada una secuencia válida de lanzamientos para una línea de *Bowling Americano de Diez Pines*, calcule el **puntaje total** de la partida.

### 🛑 Lo que **NO** hará el programa:

* No verificará si los lanzamientos son válidos.
* No verificará si la cantidad de lanzamientos y cuadros (*frames*, explicados más adelante) es correcta.
* No mostrará puntajes intermedios por cuadro.

---

## 📘 Reglas de puntuación

Podemos resumir la puntuación de esta forma de bowling de la siguiente manera:

* Cada partida o “línea” de bolos incluye **10 turnos o cuadros (frames)** para el jugador.
* En cada cuadro, el jugador tiene **hasta dos lanzamientos** para derribar todos los pinos.
* Si no derriba todos los pinos en dos intentos, el puntaje de ese cuadro es la suma de los pinos derribados.
* Si derriba todos los pinos en dos intentos, se llama un **spare** y el puntaje es:
  `10 + pinos derribados en el siguiente lanzamiento`.
* Si derriba todos los pinos en el primer intento, se llama un **strike** y el puntaje es:
  `10 + pinos derribados en los próximos dos lanzamientos`.
  (Estos dos lanzamientos pueden ser del siguiente cuadro o de los siguientes dos cuadros si hay otro strike).

---

## 🎯 Regla especial para el último cuadro (cuadro 10)

* Si hace un **spare**, obtiene **1 lanzamiento extra**.
* Si hace un **strike**, obtiene **2 lanzamientos extra**.
* Estos lanzamientos extra **no crean un cuadro 11**. Solo se utilizan para calcular el puntaje del cuadro 10.

---

## ✅ Objetivo

Calcular el **puntaje total** de la partida, que es la suma de los puntajes de los 10 cuadros.

> ⚠️ **Importante**: No se necesitan validaciones de datos ni mostrar resultados intermedios. Solo calcular el puntaje final.

---

## 🧪 Resultado de los Tests


```bash
> bowling@1.0.0 test
> jest

tirada1 = [[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0,0]]
tirada2 = [[9,1],[6,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
tirada3 = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]]
tirada4 = [[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0],[5,0,0]]
tirada5 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10,3,7]]
tirada6 = [[10,0],[10,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
tirada7 = [[10,0],[5,4],[10,0],[5,4],[10,0],[5,4],[10,0],[5,4],[10,0],[5,4,0]]
tirada8 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]]
tirada9 = [[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5,5]]
tirada10 = [[10,0],[0,10],[10,0],[0,10],[10,0],[0,10],[10,0],[0,10],[10,0],[0,10,0]]
tirada11 = [[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,0]]
tirada12 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,10],[5,5,5]]
tirada13 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10,0],[5,5,5]]

 PASS  ./bowling.test.js
  Test Suit
    ✓ tirada invalida (13 ms)
    ✓ tirada 1 debe sumar 90
    ✓ tirada 2 debe sumar 22 (1 ms)
    ✓ tirada 3 perfecta debe sumar 300 (1 ms)
    ✓ tirada 4 debe sumar 50
    ✓ tirada 5 debe sumar 20 (1 ms)
    ✓ tirada 6 debe sumar 36
    ✓ tirada 7 debe sumar 140
    ✓ tirada 8 debe sumar 0 (1 ms)
    ✓ tirada 9 debe sumar 150 (1 ms)
    ✓ tirada 10 debe sumar 190 (1 ms)
    ✓ tirada 11 debe sumar 290 (1 ms)
    ✓ tirada 12 debe sumar 30
    ✓ tirada 13 debe sumar 35

Test Suites: 1 passed, 1 total  
Tests:       14 passed, 14 total  
Snapshots:   0 total  
Time:        0.331 s, estimated 1 s  
Ran all test suites.
```

---


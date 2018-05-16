Bank account kata
=================
 
### Objetivo

Aprender y practicar con los dobles de tests y outside-in tdd.
 
### Descripción del problema - Bank kata
 
Crear una aplicación bancaria simple con las siguientes funcionalidades:

     - Ingresar dinero en una cuenta.
     - Retirar dinero de una cuenta.
     - Imprimir por consola el extracto, un resumen de las operaciones.
 
## Criterios de aceptación

El resumen de operaciones debe tener el siguiente formato:

```
   CRÉDITO  | BALANCE
   500.00   | 1400.00
   -100.00  | 900.00
   1000.00  | 1000.00
```

## Punto de inicio y restricciones

Empezar con una clase con la siguiente estructura:

    public class Account {

        public void deposit(int amount);

        public void withdrawal(int amount);

        public void printStatement();

    }

No esta permitido añadir ningún otro método público a esta clase.

**NOTA:** Para mantener el ejercicio más simple usa _int_ para el importe y _String_ para las fechas.
Además, se puede ignorar el formato de salida del extracto (espacios entre pipes y las palabras, etc).


## Créditos

Esta es únicamente la versión javascript y con descripción en castellano de la kata original. La kata original está publicada en [sandromancuso github](https://github.com/sandromancuso/bank-kata-outsidein-screencast)

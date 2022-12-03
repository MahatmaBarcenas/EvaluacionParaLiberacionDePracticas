# EvaluacionParaLiberacionDePracticas

## Lineas de Codigo

## Proyecto
Se declara in objeto llamado Maria
```javascript
var Maria = {
```
Se declara la variable nombre del objeto, su valor es "Maria"
```javascript
nombre: 'Maria',
```
Se declara la variable apellido del objeto, su valor es "Sanches"
```javascript
apellido: "Sanchez",
```
Se declara la variable edad del objeto, su valor es 38
```javascript
edad: 38,
```
Se declara la variable peso del objeto, su valor es 78
```javascript
peso: 78
```
Se cierra el objeto
```javascript
}
```
Se declara una constante llamada SubeDePeso que es igual a persona que es igual o mayor que el pedo del objeto que es igual al peso del objeto mas 0.2
```javascript
const SubeDePeso = persona =>  persona.peso = persona.peso + 0.2;
```
Se declara una constante llamada BajaDePeso que es igual a persona que es igual o mayor que el pedo del objeto que es igual al peso del objeto menos 0.2
```javascript
const BajaDePeso = persona =>  persona.peso = persona.peso - 0.2;
```
Se declara una funcion llamada imprimirDatos con parametro de persona
```javascript
function imprimirDatos(persona) {
```
Se muestra un mensaje en consola el cual dira "Al inicio del año Maria Sanchez pesaba 78 kg"
```javascript
console.log(`Al inico del año ${persona.nombre} ${persona.apellido} pesaba ${persona.peso} kg`);
```
Se declara una constante llamada Adelagazar que es igual a 0.5
```javascript
const Adelgazar = 0.5;
```
Se declara una constante llamada Aumentar que es igual a 0.25
```javascript
const Aumentar = 0.25;
```
Se declara un ciclo for en el cual se define i como 1, Despues se comprueba que i sea menor o igual a 365. Por ultimo i aunmentasu valor en 1 con cada repeticion
```javascript
for (i = 1; i <= 365; i++) {
```
Se declara aletoria para poder captar un numero random
```javascript
Aleatorio = Math.random();
```
Se declara un if con la condicion Aleatorio menor o igual a Aumentar
```javascript
if(Aleatorio <= Aumentar){
```
Se activa las constante SubeDePeso donde le sumara 0.2 al peso del objeto
```javascript
SubeDePeso(persona);
```
Se cierra el if
```javascript
}
```
En caso de que el la condicion del if se declara un else. Despues se declara un if con la condicion Aleatoria menor o igual a Adelgazar
```javascript
else if(Aleatorio <= Adelgazar){
```
Se activa las constante BajaDePeso donde le restara 0.2 al peso del objeto
```javascript
BajaDePeso(persona);
```
Se cierra el if
```javascript
}
```
Se cierra el else
```javascript
}   
```
Se muestra un mensaje en consola, el cual dira "Al final del año Maria Sanchez pesa" y el peso fianl de la persona
```javascript
console.log(`Al final del año ${persona.nombre} ${persona.apellido} pesa `+ persona.peso.toFixed(2) + ` kg`);
```
Se cierra la funcion llamada imprimirDatos
```javascript
}
```
Se ejecuta la funcion imprimirDatos con respecto al objeto Maria
```javascript
imprimirDatos(Maria);
```

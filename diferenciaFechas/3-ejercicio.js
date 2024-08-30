/*
    Enunciado Ejercicio 3:
    Dadas dos fechas, crea una función que me proporcione la diferencia de dias
    entre ellas

    Ejemplo:
    diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
*/
const date1= 'Dec 1, 2023';
const date2= '10/3/2023';

function diferenceDays (date1, date2){
    //comprobar formato de fechas
    date1 = date1 instanceof Date ? date1 : new Date(date1);
    date2 = date2 instanceof Date ? date2 : new Date(date2);
    
    //obtener la diferencia de fechas en milisegundos
    //Math.abs() = valor absoluto de un numero -1 = 1
    const diferenceMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    
    //saber el valor de un dia hay que dividir entre los milisegundos que seobtuvieron anteriormente con los milisegundos que tiene un dia
    //Math.floor() = redondear la cifra
    const days = Math.floor(diferenceMilliseconds / (1000 * 60 * 60 * 24)); //1000milisegundos = 1segundo, 60segundos = 1 minuto, 60minutos = 1hora, 24horas = 1dia
    
    if(isNaN(days)) return 'Formato de fecha incorrecto, usar el formato americano '

    return days+' días';
}

console.log(diferenceDays(date1, date2));
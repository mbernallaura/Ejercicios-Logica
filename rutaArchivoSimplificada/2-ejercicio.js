/*
    Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
    crear una función que la simplifique

    Ejemplo:
    simplificarRuta("/home/");             // Salida: /home
    simplificarRuta("/x/./y/../../z/");    // Salida: /z
    simplificarRuta("/../");               // Salida: /
    simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
*/

const root = '/home//pruebas/';


function simplifyRoot ( root ){
    //Almacenar las partes de la ruta
    let pila = [];
    
    //Dividir la ruta, utilizando el separador
    const parts = root.split('/');
    
    for (const part of parts) {
        //Si tiene '..' se elimina el elemento anterior a esos dos puntos
        if(part === '..') {
            pila.pop();
        }else if(part !== '.' && part !=''){
            pila.push(part); //
        }
    }

    //Para unir elementos con algo en especifico en este caso '/' se utiliza join
    return '/' + pila.join('/');
}

console.log(simplifyRoot('/home/'));
console.log(simplifyRoot('/x/./y/../../z/'));
console.log(simplifyRoot('/../'));
console.log(simplifyRoot('/home//pruebas/'));


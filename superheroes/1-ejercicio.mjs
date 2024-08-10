/*
Enunciado:
Dado un array o un objeto de superheroes de Marvel, haz un programa que pueda mostrar la informacion de un superheroe
Añade una capacidad de buscar la informacion de varios superheroes a la vez.

Ejemplo:
mostrarInfoSuperheroes('Iron Man');

salida:
Nombre real: Tony Stark
Poderes: Tecnologia avanzada, Movilidad aerea
Equipo: Los Vengadores

Ejemplo 2:
mostrarInfoSuperheroes([array nombres]);

salida:
Muestra la informacion de todos los superheroes
*/
import { infoSuperheroes } from './listSuperHeroes.mjs';

function mostrarInfoSuperheroe(nickname){
    console.log(`###### ${nickname} ######`);
    //Comprobar si el super heroe existe dentro del objeto
    if(nickname in infoSuperheroes){
        //Conseguir la info del super heroe
        const info = infoSuperheroes[nickname];

        //Mostra la info
        console.log(`Nombre real: ${info.nombreReal}`);
        console.log(`Poderes: ${info.poderes.join(", ")}`);
        console.log(`Equipo: ${info.equipo}`);
        
    }else{
        console.log(`${nickname} no existe en los datos que tengo`);
        
    }
}

const mostrarInfoSuperheroes = (nicknames) =>{
    //Recorrer todos los nombres
    nicknames.forEach(nickname => {
        //mostrar la info de todos los superheroes
        mostrarInfoSuperheroe(nickname);
    });
}

mostrarInfoSuperheroe('Thor');
mostrarInfoSuperheroes(['Iron Man', 'Thor', 'Joker'])

const funcionesDeTareas = require('./funcionesDeTareas.js');
const tareasJs = funcionesDeTareas.leerMiArray();

let procedimiento = process.argv[2]; 

switch(procedimiento){
    case 'listar':
        tareasJs.forEach(tarea => {
            console.log(`Tarea: ${tarea.titulo}\n Estado: ${tarea.estado}`);
        });
    break
    case undefined:
        console.log('Atencion - Tienes que pasar una accion');
    break
    default: 
        console.log('No entiendo que quieres hacer');
    break
}
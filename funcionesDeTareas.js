const fs = require('fs');

let funcionesDeTareas = {
    leerMiArray: function () {
        let tareas = fs.readFileSync('./app-tareas/tareas.json', 'utf-8');
        let tareasJs = JSON.parse(tareas);
        return tareasJs;
    }
}

module.exports = funcionesDeTareas;
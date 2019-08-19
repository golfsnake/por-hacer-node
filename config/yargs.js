const opts_crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea.'
    }
};
const opts_actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea.'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Indica que la tarea pase a completada.'
    }
};
const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer.', opts_crear)
    .command('listar', 'Lista todas las tareas por hacer.')
    .command('actualizar', 'Modifica el estado de una tarea.', opts_actualizar)
    .command('borrar', 'Elimina una tarea.', opts_crear)
    .help()
    .argv;

module.exports = {
    argv
}
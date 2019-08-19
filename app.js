// REQUISITOS
const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');


// console.log(argv);

// COMANDOS
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('_______________________________________________________'.gray);
            console.log(' - TAREA: '.gray + `${tarea.descripcion}`.green);
            console.log(' - ESTADO: '.gray + `${tarea.completado}`.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualizado: ${actualizado}`);
        break;
    case 'borrar':
        let borrada = porHacer.borrar(argv.descripcion);
        console.log(`Borrada: ${borrada}`);
        break;
    default:
        console.log('Comando no es reconocido'.red);
};
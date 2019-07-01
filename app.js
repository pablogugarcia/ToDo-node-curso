const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];
let descripcion, completado;
argv.descripcion ? descripcion = argv.descripcion : descripcion = argv.d;
argv.completado ? completado = argv.completado : completado = argv.c;


switch (command) {
    case 'crear':
        let task = todo.add(argv.descripcion);
        break;
    case 'listar':
        let list;
        completado ? list = todo.getList(completado) : list = todo.getList();
        for (const task of list) {
            console.log('==========Por hacer ========='.green);
            console.log(task.description);
            console.log(`Estado: ${task.complete}`);
            console.log('============================='.green);

        }

        break;
    case 'actualizar':

        let update = todo.update(descripcion, completado);
        console.log(update);
        break;

    case 'borrar':

        let taskDelete = todo.deleteTask(descripcion);
        console.log(taskDelete);

        break;
    default:
        console.log('Comando no reconocido');

}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: ' Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('Actualizar', ' Actualiza una tarea ya echa', { descripcion, completado })
    .command('borrar', 'Eliminar la tarea', { descripcion })
    .command('listar', 'Listar las tareas', { completado })
    .help()
    .argv

module.exports = {
    argv
}
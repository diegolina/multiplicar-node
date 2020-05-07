const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

};




const argv = require('yargs')
    .command('listar', 'imprime en cosola la tabla de multipicar', opciones)
    .command('crear', 'crea la tabla de multipicar', opciones)
    .help()
    .argv;


module.exports = {
    argv
}
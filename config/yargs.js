const { describe } = require('yargs');

const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number', 
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
   })
   .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: 'false',
      describe: 'muestra la tabla en consola',
   })
   .option('h', {
       alias: 'hasta', 
       type: 'number',
       default: 10,
       describe: 'Es el limite de la tabla'
   })
   .check((argv, option)=>{
      if(isNaN(argv.b)){
         throw 'La base tiene que ser un número'
      }else{
         return true;
      }
   })
   .argv;

module.exports = argv;
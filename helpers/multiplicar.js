const fs = require('fs');
const colors = require('colors');
colors.setTheme({
    factor1: ['brightGreen', 'bold'],
    factor2: ['brightMagenta', 'dim'],
    equal: 'rainbow',
    times: ['hidden', 'brightCyan'],
    result: ['brightBlue', 'underline'], 
    text: ['bold', 'brightYellow']
})

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${colors.factor1(base)} ${'x'.times} ${colors.factor2(i)} ${'='.equal} ${colors.result(base*i)}\n`;
        }
        
        if(listar == true){
            console.log('==============================='.equal);
            console.log('Tabla del: '.text, colors.blue(base));
            console.log('==============================='.equal);
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`
        
    } catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}
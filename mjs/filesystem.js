const fs = require('node:fs') //a partir de node 16 se recomienda poner node:

const stats = fs.statSync(__dirname + '/archivo.txt') 
console.log(
    
    "es un archivo?:"+stats.isFile(),
    "es un Directorio?:"+stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
);

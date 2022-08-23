/*function convertirTexto() {
    //Crear una funcion para generar el hash de un texto como numero entero
    //Usando métodos ya establecidos
    //Aqui tu codigo
}*/

function convertirTexto(texto) {
    if (typeof texto != 'string') {
        throw TypeError ('Ingrese un texto');
    }
    if (!texto.length) {
        return null;
    }
    var cadena= texto.split('');
    return cadena.reduce ((h, a) => (h = a.charCodeAt(0) + (h >> 6) + (h >> 16) - h), 0);

}

try {
    console.log (convertirTexto ('Leonardo'));
} catch (e) {
    console.log ('Error: ${e.message}')
}



/*function HashTable() {
    //      Hash Table
    //      Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
    //      Para guardar un valor asociado a una key (string):
    //    - Correr la key a través de una función hash para transformarla a un número entero.
    //    - Establecer el par llave/valor en tu tabla hash -- Usa un set
    //    - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
    //      Aqui tu codigo

}*/

const mundiales = new Map();

mundiales.set("Argentina", "1978-1986");
mundiales.set("Francia", "1998-2018");
mundiales.set("Uruguay", "1930-1950");

console.log(mundiales.get("Argentina"));


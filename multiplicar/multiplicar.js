//requireds
const fs = require('fs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("La base no es un numero!!!");
            return;
        };

        if (!Number(limite)) {
            reject("El limite no es un numero!!!");
            return;
        };
        let data = "";

        for (i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += (base + " * " + i + " = " + resultado) + `\n`;

        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {


            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

};


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("La base no es un numero!!!");
            return;
        };

        if (!Number(limite)) {
            reject("El limite no es un numero!!!");
            return;
        };

        let data = "";

        for (i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += (base + " * " + i + " = " + resultado) + `\n`;

        };

        resolve(data);

    });

};

module.exports = {
    crearArchivo,
    listarTabla
}
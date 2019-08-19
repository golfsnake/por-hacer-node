const fs = require('fs');

let listadoPorHacer = [];

const leeDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo escribir el archivo ./db/data.json');
    })
    return true;
}

const crear = (descripcion) => {
    leeDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    leeDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    leeDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;

}

const borrar = (descripcion) => {
    leeDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else return false;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
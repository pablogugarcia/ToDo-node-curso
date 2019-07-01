const fs = require('fs');

let toDoList = [];

const loadDB = () => {

    try {

        toDoList = require('../db/data.json');

    } catch (error) {
        toDoList = [];
    }

}

const db = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(toDoList);

        fs.writeFile('./db/data.json', data, (err) => {
            if (err) reject(err);
            resolve('Operacion exitosa!');
        })
    })

}

const getList = (complete) => {
    loadDB();
    if (complete) {
        return toDoList.filter(task => String(task.complete) === complete);
    } else return toDoList;
}

const add = (description) => {

    loadDB();
    let toDo = {
        description,
        complete: false
    }
    toDoList.push(toDo);

    db().then((mje) => console.log(mje))
        .catch((err) => console.log(err))


    return toDo;
}

const update = (description, complete = true) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        toDoList[index].complete = complete;
        db().then((mje) => console.log(mje))
            .catch((err) => console.log(err))
        return true;

    } else { return false };


}

const deleteTask = (description) => {

    loadDB();
    let index = toDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        toDoList.splice(index, 1);
        db().then((mje) => console.log(mje))
            .catch((err) => console.log(err))
        return true;

    } else { return false };
}

module.exports = {
    add,
    getList,
    update,
    deleteTask
}
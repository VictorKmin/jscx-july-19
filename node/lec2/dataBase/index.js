const Sequelize = require('sequelize');
const fs = require('fs');
const {resolve} = require('path');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('lun', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, file) => {
                file.forEach(file => { // House.js
                    const modelName = file.split('.')[0]; // ['House', 'js]
                    models[modelName] = client.import(resolve(`./dataBase/models/${modelName}`))
                })
            })
        }

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();
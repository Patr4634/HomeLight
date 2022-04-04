exports.Get = function (req, res) {
    try {
        if (parseInt(req.params.Id)) {
            let id = req.params.Id;

            const sqlite3 = require('sqlite3').verbose();
            let db = new sqlite3.Database('../Database/HomeLight.db');
            let sql = `SELECT * FROM Light WHERE Id = ${id};`;

            db.all(sql, [], (err, row) => {
                if (err) {
                    throw err;
                }
                res.status(200).send(row);
            });

            return db.close();
        }

        res.status(400).send("Invalid Data");
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.GetAll = function (req, res) {
    try {
        const sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('../Database/HomeLight.db');
        let sql = 'SELECT * FROM Light';

        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            res.status(200).send(rows);
        });

        return db.close();
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.Create = function (req, res) {
    try {
        res.status(201).send();
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.Update = function (req, res) {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.Delete = function (req, res) {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.TogglePin = function (req, res) {
    try {
        console.log(req.body);
        res.status(201).send("Sup ma duhd");
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}
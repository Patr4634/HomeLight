const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch-commonjs');

const MCUEndpoint = ''

exports.Get = function (req, res) {
    try {
        if (parseInt(req.params.Id)) {
            const id = req.params.Id;

            const db = new sqlite3.Database('../Database/HomeLight.db');
            let sql = `SELECT * FROM Light WHERE Id = ${id};`;

            db.all(sql, [], (err, row) => {
                if (err) {
                    res.status(500).send({ errors: err });
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
        const db = new sqlite3.Database('../Database/HomeLight.db');
        let sql = 'SELECT * FROM Light';

        db.all(sql, [], (err, rows) => {
            if (err) {
                res.status(500).send({ errors: err });
            }
            res.status(200).send(rows);
        });

        return db.close();
    } catch (err) {
        res.status(500).send({ errors: err });
    }
}

exports.TogglePin = async function (req, res) {
    try {
        const id = req.body.id;
        const state = req.body.state;

        if (parseInt(id)) {
            const db = new sqlite3.Database('../Database/HomeLight.db');

            db.all(`SELECT * FROM Light WHERE Id = ${id};`, [], (err, row) => {
                if (err) {
                    res.status(500).send({ errors: err });
                }

                let light = row[0];

                db.all(`UPDATE Light SET State = '${state}' WHERE Id = '${id}'`, [], (err) => {
                    if (err) {
                        res.status(500).send({ errors: err });
                    }

                    fetch(MCUEndpoint + '/toggle/' + light.LightPin + '/' + light.State, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        }
                    })
                        .then((response) => {
                            res.status(response.status).send();
                        })
                })
            });

            return db.close();
        }

        res.status(500).send("Bad Data");
    } catch (err) {
        console.log(err);
        res.status(500).send({ errors: err });
    }
}
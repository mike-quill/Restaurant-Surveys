var express = require('express');
var router = express.Router();
var db = require('../database');

router.use(express.json());

/* GET return all restaurants. */
/* http://localhost:3001/api/v1/restaurants/ */
router.get('/', async function (req, res, next) {
    try {
        const results = await db.any('SELECT * FROM restaurants');
        console.log(results.length);
        res.status(200).json({
            status: "success",
            results: results.length,
            data: {
                restaurants: results
            }
        })
    } catch (error) {
        console.log(error);
    }
});

/* GET return one restaurant by id. */
/* http://localhost:3001/api/v1/restaurants/{id} */
router.get('/:id', async function (req, res, next) {
    try {
        const result = await db.oneOrNone('SELECT * FROM restaurants WHERE id = $1;', req.params.id);
        if (result === null) {
            res.sendStatus(404);
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    restaurant: result
                }
            });
        }

    } catch (error) {
        console.log(error);
    }
});

/* POST create one restaurant. */
/* http://localhost:3001/api/v1/restaurants/ */
router.post('/', async function (req, res, next) {
    try {
        const result = await db.one('INSERT INTO restaurants (name, latitude, longitude, street_address, province, country, phone_number, website) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [req.body.name, req.body.latitude, req.body.longitude, req.body.street_address, req.body.province, req.body.country, req.body.phone_number, req.body.website]);
        res.status(200).json({
            status: "success",
            new_id: result.id,
            restaurant: result
        });
    } catch (error) {
        console.log(error);
    }
});

/* PUT update one restaurant. */
/* http://localhost:3001/api/v1/restaurants/{id} */
router.put('/:id', async function (req, res, next) {
    try {
        if (parseInt(req.params.id) == req.body.id) {
            const result = await db.one('UPDATE restaurants SET name = ${name}, latitude = ${latitude}, longitude = ${longitude}, street_address = ${street_address}, province = ${province}, country = ${country}, phone_number = ${phone_number}, website = ${website} WHERE id = ${id} RETURNING *;', req.body);
            console.log(result);
            res.status(200).json({
                status: "success",
                data: {
                    restaurant: result
                }
            });
        } else {
            res.status(400).json({
                status: "failed",
                reason: "Invalid request. ID in URI does not match ID in request body."
            })
        }
    } catch (error) {
        console.log(error);
    }
});

/* DELETE delete one restaurants. */
/* http://localhost:3001/api/v1/restaurants/{id} */
router.delete('/:id', async function (req, res, next) {
    console.log(req);
    try {
        await db.none("DELETE FROM restaurants WHERE id = $1;", req.params.id);
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

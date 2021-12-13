var express = require('express');
var router = express.Router();
var db = require('../database');

router.use(express.json());

/* GET return all restaurants. */
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
router.get('/:id', async function (req, res, next) {
    try {
        const results = await db.one('SELECT * FROM restaurants WHERE id = $1', req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results
            }
        })
    } catch (error) {
        console.log(error);
    }
});

/* POST create one restaurant. */
router.post('/', async function (req, res, next) {
    try {
        const id = await db.one('INSERT INTO restaurants (name, latitude, longitude, street_address, province, country, phone_number, website) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id', [req.body.name, req.body.latitude, req.body.longitude, req.body.street_address, req.body.province, req.body.country, req.body.phone_number, req.body.website]);
        res.status(200).json({
            status: "success",
            new_id: id.id
        });
    } catch (error) {
        console.log(error);
    }
});

/* PUT update one restaurant. */
router.put('/:id', function (req, res, next) {
    console.log(req);
});

/* DELETE delete one restaurants. */
router.delete('/:id', function (req, res, next) {
    console.log(req);
});

module.exports = router;

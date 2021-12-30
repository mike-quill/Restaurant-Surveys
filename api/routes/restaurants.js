var express = require('express');
var router = express.Router();
var db = require('../database');

router.use(express.json());

/* GET return all restaurants. */
/* http://localhost:3001/api/v1/restaurants/ */
router.get('/', async function (req, res, next) {
    try {
        //const results = await db.any('SELECT * FROM restaurants;');
        const results = await db.any('SELECT r.*, s.ratings_count, s.average_rating FROM restaurants r LEFT JOIN (SELECT restaurant_id, COUNT(rating) AS ratings_count, TRUNC(AVG(rating), 1) AS "average_rating" FROM surveys GROUP BY restaurant_id) s ON r.id = s.restaurant_id;');

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
        const restaurant = await db.oneOrNone('SELECT r.*, s.ratings_count, s.average_rating FROM restaurants r LEFT JOIN (SELECT restaurant_id, COUNT(rating) AS ratings_count, TRUNC(AVG(rating), 1) AS "average_rating" FROM surveys GROUP BY restaurant_id) s ON r.id = s.restaurant_id WHERE r.id = $1;', req.params.id);
        const surveys = await db.any('SELECT * FROM surveys WHERE restaurant_id = $1;', req.params.id);
        if (restaurant === null) {
            res.sendStatus(404);
        } else {
            res.status(200).json({
                status: "success",
                data: {
                    restaurant: restaurant,
                    surveys: surveys
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
        const result = await db.one('INSERT INTO restaurants (name, street_address, city, province, phone_number, website) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [req.body.name, req.body.street_address, req.body.city, req.body.province, req.body.phone_number, req.body.website]);
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
        console.log(req.params.id);
        const result = await db.one('UPDATE restaurants SET name = ${body.name}, street_address = ${body.street_address}, city = ${body.city}, province = ${body.province}, phone_number = ${body.phone_number}, website = ${body.website} WHERE id = ${params.id} RETURNING *;', req);
        console.log(result);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: result
            }
        });


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

/* POST new survey for restaurant */
/* http://localhost:3001/api/v1/restaurants/{id}/survey */
router.post('/:id/survey', async function (req, res, next) {
    try {
        const result = await db.one('INSERT INTO surveys (restaurant_id, comments, rating, date_submitted) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *', [req.body.restaurant_id, req.body.comments, req.body.rating]);
        res.status(200).json({
            status: "success",
            new_id: result.id,
            survey: result
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

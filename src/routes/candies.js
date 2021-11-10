const exp = require('express');
const router = exp.Router();
const pool = require('../database.js');

router.get('/', async(req, res) => {
    let listCandies = await pool.query('SELECT * FROM candies');
    res.json({
        status: 200,
        message: 'Se consulto correctamente',
        listCandies: listCandies
    });
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;

    let candy = await pool.query('SELECT * FROM candies WHERE id = ?', [id]);

    res.json({
        status: 200,
        message: 'Se encontro el dulce',
        candy: candy
    });
});

router.post('/create', async(req, res) => {
    const {name, price, expiration, isSalad} = req.body;
    const today = new Date();

    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();

    if(d < 10) d = '0' + d;
    if(m < 10) m = '0' + m;

    const date_registered = y+'-'+m+'-'+d;
    const date_created = y+'-'+m+'-'+d;

    const candy = {
        name, price, expiration, isSalad, date_registered, date_created
    };

    await pool.query('INSERT INTO candies SET ?', [candy]);

    res.json({
        status: 200,
        message: 'Se creo correctamente',
        candy: candy
    });
});

router.post('/update/:id', async(req, res) => {
    const {id} = req.params;
    const {name, price, expiration, isSalad} = req.body;
    const today = new Date();

    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();

    if(d < 10) d = '0' + d;
    if(m < 10) m = '0' + m;

    const date_registered = y+'-'+m+'-'+d;
    const date_created = y+'-'+m+'-'+d;

    const candy = {
        name, price, expiration, isSalad, date_registered, date_created
    };

    await pool.query('UPDATE candies SET ? WHERE id = ?', [candy, id]);

    res.json({
        status: 200,
        message: 'Se modificó correctamente',
        candy: candy
    });
});

router.post('/delete/:id', async(req, res) => {
    const {id} = req.params;

    await pool.query('DELETE FROM candies WHERE id = ?', [id]);

    res.json({
        status: 200,
        message: 'Se eliminó correctamente'
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();

const Item = require('../models/item');

router.get( '/', (req, res) => {
    Item.find(function (err, items){
        if(err) { throw err; }
        else{ 
            res.json(items);
        }
    })
});

//add data - item

router.post( '/', (req, res) => {
    const item = new Item(req.body);
    item.save()
    .then(item => {
        res.status(200).json({item: 'item agregado'});
    })
    .catch(err => {
        res.status(400).send({err: 'Error al agregar el item'});
    })
});

//update

router.put( '/:id', (req, res, next) => {
    Item.findById(req.params.id, function(err, item){
        if(!item){
            return next(new Error('No se pudo cargar documento'));
        } else {
            item.name = req.body.name;
            item.price = req.body.price;
            item.save()
            .then(item => {
                res.json('Actualizacion completa')
            })
            .catch(err => {
                res.status(400).send('No se pudo actualizar');
            })
        }
    })
});

router.delete( '/:id', (req, res, next) => {
    Item.findByIdAndRemove(req.params.id, function(err, item){
        if(err) { res.json(err);} 
        else {
           res.json('Item eliminado satisfactoriamente');
        }
    })
});

module.exports = router;

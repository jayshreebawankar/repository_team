const express = require('express');
const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        decription: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th st, New York, NY 10001',
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        decription: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th st, New York, NY 10001',
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'Empire State Building',
        decription: 'One of the most famous sky scrapers in the world!',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: '20 W 34th st, New York, NY 10001',
        creator: 'u3'
    }
];

const getPlaceById = ((req, res, next) => {
    const placedId =req.params.pid;
    const place =DUMMY_PLACES.find(p =>{
        return p.id == placedId || p.title == placedId || p.description == placedId || p.location == placedId || p.address == placedId || p.creator == placedId;
    });

    if(!place) {
       throw new HttpError('Could not find a a place for a provided id.', 404);
    }
    res.json({place})
});

const getPlaceByUserId = (req, res, next) =>{
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(P =>{
        return P.creator == userId;    
    });

    if (!place) {
        return next(
            new HttpError('Could not find a a place for a provided id.', 404)
        );
    }
    res.json({ place });
};

const createPlace = (req, res, next) => {
    const {tittle, description, coordinates, address, creator } = req.body;

    const cretedPlace ={
        id: uuid(),
        tittle,
        description,
        location: coordinates,
        address,
        creator
    };

    DUMMY_PLACES.push( createdPlace);

    res.status(201).json({ place: createdPlace});
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId ;
exports.createPlace = createPlace;
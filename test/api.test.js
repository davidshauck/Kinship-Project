const Controller = require("../controllers/siteController");
const getSpy = jest.fn();

jest.mock('express', () => {
    Router: () => jest.fn()
});

const express = require('express');

describe('should test router', () => {
    require("../routes/index");
    test('should test get POSTS', () => {
        expect(getSpy).toHaveBeenCalledWith(1, "/api/listings", findAllListings);
    });
});
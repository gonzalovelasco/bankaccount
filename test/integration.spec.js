let chai = require('chai'),
path = require('path');
let request = require('supertest');
let server = require('../server');
chai.should();

describe('API TEST', () => {
    describe('deposit', () => {
        it('request', () => {                
            request(server)
            .get('/api/deposit?user=pedro&amount=500')
            .expect(200);
        });
    
    });

    describe('withdraw', () => {
        it('request', () => {
            request(server)
            .get('/api/withdraw?user=pedro&amount=500')
            .expect(200);
        });        
    });

});


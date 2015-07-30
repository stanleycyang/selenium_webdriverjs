var Bing = require('../components/bing'),
    webdriver = require('selenium-webdriver'),
    driver = require('../config/driver'),
    bing;

describe('Bing', function(){
    beforeEach(function(done){
        bing = new Bing();
        bing.get();
        done();
    });

    // GET
    describe('Bing.get', function(){
        
        it('should be on the correct page', function(done){

            driver.getTitle().then(function(title){
                expect(title).toBe('Bing');
                done();
            });
        });

        it('should have the correct url', function(done){
            driver.getCurrentUrl().then(function(url){
                expect(url).toBe('http://www.bing.com/');
                done();
            });
        });
    });

});


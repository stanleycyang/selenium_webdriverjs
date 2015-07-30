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
        
        it('will be on the correct page', function(done){

            driver.getTitle().then(function(title){
                expect(title).toBe('Bing');
                done();
            });
        });

        it('has the correct url', function(done){
            driver.getCurrentUrl().then(function(url){
                expect(url).toBe('http://www.bing.com/');
                done();
            });
        });
    });

    // TYPEINSEARCH
    describe('Bing.typeInSearch', function(){
        beforeEach(function(done){
            bing.typeInSearch('Hello world!');
            done();
        });

        it('inputs the correct text', function(done){
            driver.findElement(webdriver.By.name('q')).getAttribute('value').then(function(text){
                expect(text).toBe('Hello world!');
                done();
            });
        });

        // SEARCH
        describe('Bing.search', function(){

            it('gets the right search result title', function(done){
               bing.search();
               driver.getTitle().then(function(title){
                    expect(title).toBe('Hello world! - Bing');
                    done();
               }); 
            });
        });
    });


});


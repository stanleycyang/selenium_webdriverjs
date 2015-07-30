// Bring in the configuration files
var driver = require('../config/driver'),
    webdriver = require('selenium-webdriver');

// Create Bing 
function Bing(){}

Bing.prototype.get = function(){
    driver.get('http://www.bing.com');
} 

// Find the search bar in Bing
Bing.prototype.typeInSearch = function(input){
    driver.findElement(webdriver.By.name('q')).sendKeys(input);
}

// Search Bing
Bing.prototype.search = function(){
    driver.findElement(webdriver.By.name('go')).click();
}

Bing.prototype.findHelloWorldLink = function(){
    return driver.findElements(webdriver.By.css('[href="https://en.wikipedia.org/wiki/Hello_world_program"]')).then(function(result){
        return result[0];
    });
}

Bing.prototype.clickTheLink = function(link){
    link.click();
}

Bing.prototype.returnTitle = function(){
    driver.getTitle().then(function(title){
        return title;
    });
}

Bing.prototype.wait = function(callback){
    driver.wait(callback, 2000);
}



module.exports = Bing;

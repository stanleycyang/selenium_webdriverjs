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

// Grab the first link of hello world
Bing.prototype.getLinkAndClick = function(){
    driver.findElements(webdriver.By.css('[href="http://www.helloworld.com/"]')).then(function(links){
        // Say which link they found
        console.log('Found', links.length, 'Hello world links');
        // Click the link
        links[0].click();
        // Promise for title
        var promise = driver.getTitle();
        promise.then(function(title){
            console.log("The title is " + title);
        });
    });
}



module.exports = Bing;

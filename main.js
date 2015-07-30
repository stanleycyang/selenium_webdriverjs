var driver = require('./config/driver');
var Bing = require('./components/bing');

// Initialize new Bing object
var bing = new Bing();

// Go to Bing
bing.get();
// Type in search
bing.typeInSearch('Hello world!');
// Search the term
bing.search();
// Run the code
bing.getLinkAndClick();


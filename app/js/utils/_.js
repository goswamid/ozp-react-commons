/**
* Commonly used utility functions.
* All are placed here in one file to not have to retype require path in each module.
**/

var objectAssign = require('object-assign');

module.exports = {
    assign: objectAssign,
    pick: require('lodash-amd/modern/objects/pick'),
    omit: require('lodash-amd/modern/objects/omit'),
    last: require('lodash-amd/modern/arrays/last'),
    remove: require('lodash-amd/modern/arrays/remove'),
    reduce: require('lodash-amd/modern/collections/reduce'),
    isArray: require('lodash-amd/modern/objects/isArray')
};

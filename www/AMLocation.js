var exec = require('cordova/exec');

// exports.getLocation = function (arg0, success, error) {
//     exec(success, error, 'AMLocation', 'getLocation', [arg0]);
//     exec(success,error,"AMLocation","getlocation",[]);
// };

function AMLocation(){}

AMLocation.prototype.getLocation = function(arg0, success, error) {
  exec(success,error,"AMLocation","getLocation",[arg0]);
};

module.exports = new AMLocation();

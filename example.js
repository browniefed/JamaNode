var JamaAPI = require('./index.js');


var Jama = new JamaAPI({
    restURL: 'http://localhost:8080/contour/rest/v1',
    username: 'hdao',
    password: 'h'
});

Jama.users.current().end(function(err, res) {
    console.log(err);
    console.log(res);
})
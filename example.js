var JamaAPI = require('./index.js');


var Jama = new JamaAPI({
    restURL: 'http://localhost:8080/contour/rest/v1',
    username: '',
    password: ''
});

Jama.users.current().end(function(err, res) {
    console.log(res.body);
})
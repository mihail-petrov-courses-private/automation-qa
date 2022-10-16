const supertest     = require('supertest');
const httpRequest   = supertest("http://localhost:1337/wordpress/wp-json/jwt-auth/v1/token");

module.exports = async () => {
    return await httpRequest.post('').send({username: "wp_admin", password: "password"});
};
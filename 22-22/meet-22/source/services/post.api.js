const supertest     = require('supertest');
const authRequest   = require('../auth');
const httpRequest   = supertest('http://localhost:1337/wordpress/wp-json/wp/v2');

const liastAllPosts = async () => {
    return await httpRequest.get(`/posts`);
};

const getSinglePost = async(postId) => {
    return await httpRequest.get(`/posts/${postId}`);
};

const createNewPost = async (postBody) => {

    const authTokenResponse =  await authRequest();
    const authTokken        = authTokenResponse.body.token;

    return await httpRequest.post(`/posts`)
    .send(postBody)
    .set("Authorization", `Bearer ${authTokken}`);
};


const getPostFromDatabase = async(postId) => {
    return await query(`SELECT * FROM wp_posts WHERE ID = ${postId}`);
}

module.exports = {
    liastAllPosts, getSinglePost, createNewPost, getPostFromDatabase
};
const assert        = require('assert');
const postService   = require('../services/post.api');

describe('Test Basic CRUD operations for /posts endpoint', () => {

    it('Lists all posts', async () => {

        const response = await postService.liastAllPosts();
        assert.equal(response.statusCode, 200, 'Expected status code 200');
    }).timeout(0);


    it('Create new posts', async () => {

        const postBody = {
            title   : 'New post title',
            content : 'New post content',
            status  : 'publish'
        };

        const response = await postService.createNewPost(postBody);

        assert.equal(response.statusCode, 201, 'Expected status code 201');
        assert.equal(response.body.title.raw, postBody.title);
    }).timeout(0);

    it('Retreave specific post', async () => {

        const postBody = {
            title   : 'New post title',
            content : 'New post content',
            status  : 'publish'
        };

        const response  = await postService.createNewPost(postBody);
        const postId    = response.body.id;

        const specificPostResponse = await postService.getSinglePost(postId);
        assert.equal(specificPostResponse.body.id, postId);
        assert.equal(response.body.title.raw, postBody.title);
    }).timeout(0);
});
const assert        = require('assert');
const postService   = require('../services/post.api');
const query         = require('../services/database');

describe(' Test database tables for consistent information', () => {

    it('Will retain information for post entity after creation of a new post', async () => {

        const postBody = {
            title   : 'Database post title',
            content : 'Database post content',
            status  : "publish"
        };

        const response  = await postService.createNewPost(postBody);
        const postId    = response.body.id;

        // const result        = await query(`SELECT * FROM wp_posts WHERE ID = ${postId}`);
        const result = await postService.getPostFromDatabase(postId);
        assert.equal(result.length, 1, `Expected collection length to be 1`);

        const singleResult  = result[0];
        assert.equal(singleResult.ID, postId, `The post ID's dees not match`);
    }).timeout(0);
});
const { Comment } = require('../models');

const commentData = [{
        comment_text: "Test comment one!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Testing testing test comment two.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Stilll testing out these comments",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
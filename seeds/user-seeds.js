const { User } = require('../models');

const userData = [{
    username: 'MarcoM',
    password: 'MM123'
},
{
    username: 'LindyLu',
    password: 'Pw123'
},
{
    username: 'Pollypocket',
    password: 'ght8i8'
}
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
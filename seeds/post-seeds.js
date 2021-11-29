const { Post } = require('../models');

const postData = [{
    title: 'Sample Title',
    content: 'sdjvufvneu wr wh rfuh wui glwiirg iu gur ui rfqrh qrn fleir uerb vjeh ir uirg uirn fvnq ubvwe.',
    user_id: 1
},
{
    title: 'Other Title',
    content: 'dfnuehr lrenf ill,jnv ijfv7u hruuvnruijv wuh kf. vwjb wj dfjhbfuvbwdfuvbef lvei db jdvdfuv  jdfvuu dfv j fvnfuvnfuvnr dfvrt.',
    user_id: 2
},
{
    title: 'Third Title',
    content: 'fjgn4r uirv urgu riutnfjvnfjvn wrddfnvnwe runv4ouvndkfvnw4tlhwrkumv swrvn jw4 ogkdrfnv rung iolvn ig e4kvn jv w4ugn vrv.',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
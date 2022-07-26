const sequelize = require('sequelize');
const commentSeed = require('./commentData');

const seeds = async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced');
    await commentSeed();
    console.log('Comment seeded');

    process.exit();
};

seeds;
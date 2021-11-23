const User = require('./User');
const Article = require('./Article');
//const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Article.belongsTo(User, {
    foreignKey: 'user_id'
});

// Article.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(Article, {
//     foreignKey: 'user_id'
// });

module.exports = { User, Article };

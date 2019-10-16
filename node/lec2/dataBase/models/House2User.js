
module.exports = (sequelize, DataTypes) => {
    const House2User = sequelize.define('House2User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        house_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
    }, {
        tableName: 'house_user',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    const House = sequelize.import('./House.js');

    House2User.belongsTo(User, {foreignKey: 'user_id'});
    House2User.belongsTo(House, {foreignKey: 'house_id'});

    return House2User;
}

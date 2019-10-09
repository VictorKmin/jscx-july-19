
module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        square: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    }, {
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User.js');
    House.belongsTo(User, {foreignKey: 'user_id'});
    return House;
}
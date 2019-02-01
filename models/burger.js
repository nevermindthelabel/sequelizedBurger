module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define(
    'burgers',
    {
      burger_name: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a burger from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our burger is between 1 and 140 characters
        validate: {
          len: [1, 140],
        },
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        // defaultValue is a flag that defaults a new burgers complete value to false if
        // it isn't supplied one
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
    },
  );
  return Burger;
};

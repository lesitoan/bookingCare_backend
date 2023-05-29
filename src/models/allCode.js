'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically. 
         */
        static associate(models) { // định danh mối quan hệ
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' });
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' });
            Allcode.hasMany(models.Schedule, { foreignKey: 'timeType', as: 'timeTypeData' });


            // relationship table Allcode and table doctorInfor
            Allcode.hasMany(models.DoctorInfor, { foreignKey: 'priceId', as: 'priceTypeData' });
            Allcode.hasMany(models.DoctorInfor, { foreignKey: 'provinceId', as: 'provinceIdTypeData' });
            Allcode.hasMany(models.DoctorInfor, { foreignKey: 'paymentId', as: 'paymentIdTypeData' });
        }
    };
    Allcode.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};
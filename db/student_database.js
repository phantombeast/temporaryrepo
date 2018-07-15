const sequelize = require('sequelize');

const studentDb = new sequelize(
    'stumandb5',
    'stumanuser5',
    'stumanpass5',
    {
        dialect: 'mysql',
        host:'localhost'
    }
)

const studentRecord = studentDb.define('studentData',{
    sName:{
        type:sequelize.DataTypes.STRING(25)
    },
    lId:{
        type:sequelize.DataTypes.STRING(15)
    },
    pwd:{
        type:sequelize.DataTypes.STRING(15)
    }
});

studentDb.sync().then(()=>console.log("Student Database Ready"));

module.exports = {studentRecord};
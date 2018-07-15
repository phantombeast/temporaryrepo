const sequelize = require('sequelize');
const db = new sequelize(
  'stumandb5',
  'stumanuser5',
  'stumanpass5',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const QuestionData = db.define('questionData',{
    question:{
        type: sequelize.DataTypes.STRING(250)
    },
    optionOne:{
        type: sequelize.DataTypes.STRING(100)
    },
    optionTwo:{
        type: sequelize.DataTypes.STRING(100)
    },
    optionThree:{
        type: sequelize.DataTypes.STRING(100)
    },
    optionFour:{
        type: sequelize.DataTypes.STRING(100)
    },
    answer:{
        type: sequelize.DataTypes.STRING(4)
    }
});




db.sync().then(()=>console.log('DATABASE READY'));

module.exports = {
    QuestionData
};
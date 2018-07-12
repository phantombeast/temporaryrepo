const route = require('express').Router();
const {QuestionData}= require('../db/exam_database');

route.get('/',(r,s)=>{
    QuestionData.findAll()
        .then((data)=>s.json(data))
        .catch((err)=>s.json(err.message));
});

route.post('/',(r,s)=>{
   QuestionData.create({
       question: r.body.q,
       optionOne: r.body.oOne,
       optionTwo: r.body.oTwo,
       optionThree: r.body.oThree,
       optionFour: r.body.oFour,
       answer:r.body.a
   })
       .then((data)=>s.json(data))
       .catch((err)=>s.send(err.message));
});

module.exports = route
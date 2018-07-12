const route = require('express').Router();

const {studentRecord}= require('../db/student_database');

route.get('/',(r,s)=>{
    studentRecord.findAll()
        .then((data)=>s.json(data))
        .catch((err)=>s.send(err.message))
});

route.post('/',(r,s)=>{
   studentRecord.create({
       sName: r.body.sName,
       lId: r.body.lId,
       pwd: r.body.pwd
   })
       .then((data)=>s.json(data))
       .catch((err)=>s.send(err.message))
});

module.exports = route
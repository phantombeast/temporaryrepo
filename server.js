const express = require('express');
const path = require('path');
var server = express();

let questions= [];
let answers = [];
let studentResponse = [];

/*function calculateResult(){
    let tempCorrectAnswers=0;
    for(let i =0; i<answers.length;i++){
        if(answers[i]===studentResponse[i]){
            tempCorrectAnswers++;
        }
    }
    return tempCorrectAnswers;
}*/

server.use(express.json());

server.use(express.urlencoded({extended: true}));

server.use(express.static(path.join(__dirname,'layout')));

server.use('/addquestion',require('./routes/paper_router'));

server.use('/regstudent',require('./routes/studentregister_router'));

server.get('/testtohome',(r,s)=>s.redirect('/'));

server.get('/registertohome',(r,s)=>s.redirect('/'));

server.get('/logintotest',(r,s)=>{
    s.redirect('/gotoQuestionPage');
});

server.get('/settor',(r,s)=>{
    s.redirect('/rstudents');
})

server.get('/logintoset',(r,s)=>{
    s.redirect('/quest')
})


server.get('/htos',(r,s)=>{s.redirect('/slogin')})

server.get('/',(r,s)=>{
    s.sendFile(path.join(__dirname,'/layout/indextemp.html'))
    console.log('Homepage using get');
})

server.get('/tlogin',(r,s)=>{
s.sendFile(path.join(__dirname,'/layout/teacherlogin.html'));
})

server.get('/htot',(r,s)=>{s.redirect('/tlogin')})

server.get('/slogin',(r,s)=>{
    s.sendFile(path.join(__dirname,'/layout/studentlogin.html'));
})

server.get('/rstudents',(r,s)=>{
    s.sendFile(path.join(__dirname,'/layout/registerstudents.html'));
})

server.get('/quest',(r,s)=>{
    console.log(path.join(__dirname,'/layout/setquestionpaper.html'))
     return s.sendFile(path.join(__dirname,'/layout/setquestionpaper.html'))
});



/*
server.post('/addquestion',(r,s)=>{
    questions.push({
        quest: r.body.q,
        opt1: r.body.oOne,
        opt2: r.body.oTwo,
        opt3: r.body.oThree,
        opt4: r.body.oFour,

        }
    )

    answers.push(
       r.body.a
    )
    console.log(questions);
    console.log(answers);
    s.send('success');
});
*/


server.get('/gotoQuestionPage',(r,s)=>{
    return s.sendFile(path.join(__dirname,'/layout/test.html'))
});
server.get('/getquestions',(r,s)=>{
    console.log('Getquestions req')
    s.send(questions);
})

server.get('/response',(r,s)=>{
    studentResponse.push(r.query.answ);
    console.log(studentResponse);
    s.send('ok');
})

server.get('/ssubmitted',(r,s)=>{
   /* let finalResult=calculateResult();
    s.send(finalResult);*/
   s.send(studentResponse)
})

server.get('/correctansw',(r,s)=>{
    s.send(answers)
})

server.get('/respage',(r,s)=>{
    s.sendFile(path.join(__dirname,'/layout/Result.html'))
}),





server.listen(4445,()=>console.log('Server started'));
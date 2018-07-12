let correctAnswers;
let submittedAnswers;
let answersLength;
let marks;
let totalMarks;
$(document).ready(function(){

    marks = $('#marks');
    totalMarks=$('#totalMarks');
    $.get('/ssubmitted',function(data){
        console.log(data);
        submittedAnswers=data;
    })

    $.get('/correctansw',function(data){
        console.log(data);
        correctAnswers=data;
        answersLength= data.length;
        console.log(answersLength);
        let lastVariable=calculateResult();
        console.log(lastVariable);
        changeValueOnPage(lastVariable)
    })

   /* console.log(correctAnswers);
    console.log(correctAnswers.length);
    console.log(submittedAnswers);
    console.log(submittedAnswers.length);*/

})

function calculateResult(){
    let tempResult=0;
    for(let i in correctAnswers){
        if(correctAnswers[i]===submittedAnswers[i]){
            tempResult++;
        }
    }
    return tempResult;
}

function changeValueOnPage(j){
    console.log('inside changeval fn');
    marks.innerHTML = j;
    totalMarks.innerHTML = answersLength;
}
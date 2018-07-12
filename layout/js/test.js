let questionList;
let questionData;
let rRadio;
let selectBtn;
let nextBtn;
let i=0;
let j=i+1;
$(document).ready(function(){
    questionList = $('#questionList');
    selectBtn = $('#doneBtn');
    nextBtn = $('#nextBtn');

    $.get('/addquestion',function(data){
        /*console.log("GET",data);*/
        questionData=data;
        /*console.log("VAR",questionData);*/

        checkCondition();
        console.log(i);

    });

    selectBtn.click(function(){
        rRadio = document.getElementsByName('rRadio');
        let tickedOption = checkedByStudent(rRadio);
        $.get('/response?answ='+tickedOption,function(data){
            console.log(data);
        });
        console.log(tickedOption);
    })

    nextBtn.click(function(){
        j++;
        checkCondition();
    })


})

function createQuestionList(i){
    let questionLiGroup = $('<ul class="list-group"></ul>');
    let questionLi = $('<li class="list-group-item active"></li>');
    let option1Li = $('<li class="list-group-item"></li>');
    let option2Li = $('<li class="list-group-item"></li>');
    let option3Li = $('<li class="list-group-item"></li>');
    let option4Li = $('<li class="list-group-item"></li>');
    let questionRow = $('<div class="row"></div>');
    let option1Row = $('<div class="row"></div>');
    let option2Row = $('<div class="row"></div>');
    let option3Row = $('<div class="row"></div>');
    let option4Row = $('<div class="row"></div>');
    let option1RadioDiv = $('<div class="col-1"></div>');
    let option2RadioDiv = $('<div class="col-1"></div>');
    let option3RadioDiv = $('<div class="col-1"></div>');
    let option4RadioDiv = $('<div class="col-1"></div>');
    let option1Radio = $('<input type="radio" name="rRadio" value="1">');
    let option2Radio = $('<input type="radio" name="rRadio" value="2">');
    let option3Radio = $('<input type="radio" name="rRadio" value="3">');
    let option4Radio = $('<input type="radio" name="rRadio" value="4">');
    let questionCol = $(`<div class="col">${questionData[i].question}</div>`);
    let option1Col = $(`<div class="col">${questionData[i].optionOne}</div>`);
    let option2Col = $(`<div class="col">${questionData[i].optionTwo}</div>`);
    let option3Col = $(`<div class="col">${questionData[i].optionThree}</div>`);
    let option4Col = $(`<div class="col">${questionData[i].optionFour}</div>`);

    questionRow.append(questionCol);
    option1Row.append(option1RadioDiv.append(option1Radio)).append(option1Col);
    option2Row.append(option2RadioDiv.append(option2Radio)).append(option2Col);
    option3Row.append(option3RadioDiv.append(option3Radio)).append(option3Col);
    option4Row.append(option4RadioDiv.append(option4Radio)).append(option4Col);

    questionLi.append(questionRow);
    option1Li.append(option1Row);
    option2Li.append(option2Row);
    option3Li.append(option3Row);
    option4Li.append(option4Row);

    questionLiGroup.append(questionLi).append(option1Li).append(option2Li).append(option3Li).append(option4Li);
    return questionLiGroup;
}

function checkedByStudent(etc){
    for(let i=0;i<etc.length;i++){
        if(etc[i].checked){
            return etc[i].value;
        }
    }
}

function checkCondition(){
    while(i<j){
        if(j<=questionData.length){
            questionList.empty();
            let tempQuestionList = createQuestionList(+i);
            questionList.append(tempQuestionList);
            i++;
        }
        else{
            /*console.log("WHATTTT")*/
            return;
        }

    }
}

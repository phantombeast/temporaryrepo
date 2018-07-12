let questionSet = [];
let questionList;
let questionInput;
let addBtn;
let option1Input;
let option2Input;
let option3Input;
let option4Input;
let answer;

$(document).ready(function() {

        getFromServer();


        questionList = $('#questionList');
        questionInput = $('#question-input');
        addBtn = $('#add-btn');

        option1Input = $('#option1-input');
        option2Input = $('#option2-input');
        option3Input = $('#option3-input');
        option4Input = $('#option4-input');

        let option = document.getElementsByName('option');

        addBtn.click(function () {
           /* console.log(questionInput.val());
            console.log(option1Input.val());
            console.log(option2Input.val());
            console.log(option3Input.val());
            console.log(option4Input.val());*/

            answer = getAnswer(option);
            console.log("Answer",answer);


            /*questionSet.push({
                question: questionInput.val(),
                firstOption : option1Input.val(),
                secondOption: option2Input.val(),
                thirdOption: option3Input.val(),
                fourthOption: option4Input.val(),
                correctAnswer: answer
            })*/

            sendToServer();

            console.log(questionSet);
            questionList.empty();
            for(let i in questionSet){
                let questionItem = createContent(+i);
                questionList.append(questionItem);
            }

        })


    })

/*Function to add question and options dynamically*/
function createContent(i){
    let questionListGroup = $('<ul class="list-group"></ul>');
    let questionList = $('<li class="list-group-item active"></li>');
    let option1List = $('<li class="list-group-item"></li>');
    let option2List = $('<li class="list-group-item"></li>');
    let option3List = $('<li class="list-group-item"></li>');
    let option4List = $('<li class="list-group-item"></li>');
    let questionContentDiv = $('<div class="row "></div>');
    let option1ContentDiv = $('<div class="row"></div>');
    let option2ContentDiv = $('<div class="row"></div>');
    let option3ContentDiv = $('<div class="row"></div>');
    let option4ContentDiv = $('<div class="row"></div>');
    let question = $(`<div class="col-12 pl-5  ">Question${i+1}.  ${questionSet[i].question}</div>`);
    let optionOne = $(`<div class="col-12 pl-5">Option 1 ${questionSet[i].firstOption}</div>`);
    let optionTwo = $(`<div class="col-12 pl-5">Option 2 ${questionSet[i].secondOption}</div>`);
    let optionThree = $(`<div class="col-12 pl-5">Option 3 ${questionSet[i].thirdOption}</div>`);
    let optionFour = $(`<div class="col-12 pl-5">Option 4 ${questionSet[i].fourthOption}</div>`);
    questionContentDiv.append(question);
    option1ContentDiv.append(optionOne);
    option2ContentDiv.append(optionTwo);
    option3ContentDiv.append(optionThree);
    option4ContentDiv.append(optionFour);
    questionList.append(questionContentDiv);
    option1List.append(option1ContentDiv);
    option2List.append(option2ContentDiv);
    option3List.append(option3ContentDiv);
    option4List.append(option4ContentDiv);
    questionListGroup.append(questionList).append(option1List).append(option2List).append(option3List).append(option4List);
    return questionListGroup;

}

function getAnswer(j){
    for(let i=0; i<j.length; i++){
        if(j[i].checked){
            return j[i].value;
        }
    }
}
/*
function sendToServer(){
    $.get('/addquestion?q='+questionInput.val()+'&oOne='+option1Input.val()+'&oTwo='+option2Input.val()+'&oThree='+option3Input.val()+'&oFour='+option4Input.val()+'&a='+answer,function(msg){
        console.log(msg);
        if(msg !== 'success'){
            alert("Server Writing Failed");
            return null;
        }

    })
}*/

function sendToServer(){
    $.post('/addquestion',
        {
            q: questionInput.val(),
            oOne: option1Input.val(),
            oTwo:option2Input.val(),
            oThree:option2Input.val(),
            oFour:option2Input.val(),
            a:answer
        },
        function(data){
            console.log("returned data"+data)
        }

    )
}

function getFromServer(){
    $.get('/addquestion',function(data){
        questionSet= data;
    })
}
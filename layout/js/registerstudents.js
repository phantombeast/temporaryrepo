let studentData = [];
let studentDetails;
let studentName;
let loginId;
let password;
let addBtn;
let doneBtn;



$(document).ready(function(){
    getStudentData();

    studentDetails = $('#studentDetails');
    studentName = $('#studentName');
    loginId = $('#loginId');
    password = $('#password');
    addBtn = $('#addBtn');
    doneBtn = $('#doneBtn');


    addBtn.click(function(){
        console.log("Add");
        if((studentName.val()&&loginId.val()&&password.val())===''){
            alert("Please Fill All Details");
            return null;
        }

        /*studentData.push({
            sName:studentName.val(),
            lId:loginId.val(),
            pwd:password.val()
        });*/

        postStudentData();
        getStudentData();

        studentName.val('');
        loginId.val('');
        password.val('');

        studentDetails.empty();
        studentDataLoop()


    })
    doneBtn.click(function(){
        console.log("Done")
    })


})

function studentDataLoop() {
    for(let i in studentData){
        let tempDataList=createContent(i);
        studentDetails.append(tempDataList);
    }
}

function createContent(i){
    let nameList = $('<li class="mt-4 mb-4 "></li>');

    let dataRow = $('<div class="row"></div>');

    let nameData = $(`<div class="col-3 alert alert-success">${studentData[i].sName}</div>`);
    let loginIdData = $(`<div class="col-3 alert alert-danger">${studentData[i].lId}</div>`);
    let passwordData = $(`<div class="col-3 alert alert-info">${studentData[i].pwd}</div>`);


    dataRow.append(nameData).append(loginIdData).append(passwordData);

    nameList.append(dataRow)
    return nameList;
}

function getStudentData(){
    $.get('/regstudent',function (data) {
        studentData = data
    })
}

function postStudentData() {
    $.post('/regstudent',
        {
            sName: studentName.val(),
            lId: loginId.val(),
            pwd: password.val()
        },
        function (data) {
            console.log('Post request data',data)
            studentDataLoop();
        }
    )
}
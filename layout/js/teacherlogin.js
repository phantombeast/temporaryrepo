window.onload=function(){
    let submitBtn = $('#submitBtn');
    submitBtn.click(function(){
        $.get('/quest',()=>console.log("Loading setquestionpaper.html"))
    })
};
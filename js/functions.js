document.getElementById('submitRegistration').addEventListener('click', function(e) {
    e.preventDefault();
    let queryStr = $("#regForm").serialize();
    console.log(queryStr);    
});

document.getElementById('submitLogin').addEventListener('click', function(e) {
    e.preventDefault();
    let queryStr = $("#logForm").serialize();
    console.log(queryStr);
});

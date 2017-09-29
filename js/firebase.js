//firebase.js

var database = firebase.database();

function Load(){
    alert("????");
}

function readUserData(){
    var details;
    database.ref('email/').on('value', function (snapshot) {
        console.log("debug");
        details = snapshot.val();
        console.log(details);
        document.getElementById("comp").innerHTML = details;
    });
    console.log("ran 'readUserData' Function");
}

function writeUserData() {
    firebase.database().ref('email/').set({
        email: email
    });
}

//firebase.js
var x = 0;
var totalStudents; // number of total students


firebase.database().ref('/Students').once('value').then(function(snapshot){
    totalStudents = snapshot.val();
});


function loop() {

    for(var i = 0; i < totalStudents; i++) {
        x++;
        console.log(x);
        pull();
    }

}
function pull() {
    var student = 'student' + x;
    console.log(student);

    firebase.database().ref(student +'/firstName').once('value').then(function(snapshot){
        console.log("First Name =", snapshot.val());
        document.getElementById("fName" + x).innerHTML = snapshot.val();
    });

    firebase.database().ref(student + '/lastName').once('value').then(function(snapshot) {
        console.log("Last Name =", snapshot.val());
        document.getElementById("lName" + x).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/title').once('value').then(function(snapshot) {
        console.log("title = ", snapshot.val());
        document.getElementById("title" + x).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/description').once('value').then(function(snapshot) {
        console.log("description = ", snapshot.val());
        document.getElementById("description" + x).innerText = snapshot.val();

    });

    firebase.database().ref(student + '/photo').once('value').then(function(snapshot) {
        console.log("photo URL = ", snapshot.val());
        document.getElementById("photo" + x).src = snapshot.val();
    });
}


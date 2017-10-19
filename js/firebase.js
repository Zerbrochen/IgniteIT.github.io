//firebase.js
var x = 0;
function ourTeam(){
    var fName;
    var lName;
    var title;
    var description;
    x++;
    console.log(x);
    firebase.database().ref('/student1/firstName').once('value').then(function(snapshot){
        fName = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Fname").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student1/lastName').once('value').then(function(snapshot){
        lName = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Lname").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student1/description').once('value').then(function(snapshot) {
        description = snapshot.val();
        console.log("description =", snapshot.val());
        document.getElementById("description").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student1/title').once('value').then(function(snapshot) {
        title = snapshot.val();
    console.log("title = ", snapshot.val());
        document.getElementById("title").innerText = snapshot.val();
    });
    firebase.database().ref('/student1/photo').once('value').then(function(snapshot) {
        console.log("photo URL = ", snapshot.val());
        document.getElementById("photo").src = snapshot.val();
    });
    Thomas();
    retik();
}
function writeUserData() {
    firebase.database().ref('/email/').set({
        email: email
    });
}

function retik() {
    var fName2;
    var lName2;
    var title2;
    var description3;
    firebase.database().ref('/student2/firstName').once('value').then(function(snapshot){
        fName2 = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Fname2").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student2/lastName').once('value').then(function(snapshot){
        lName2 = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Lname2").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student2/description').once('value').then(function(snapshot) {
        description3 = snapshot.val();
        console.log("description =", snapshot.val());
        document.getElementById("description2").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student2/title').once('value').then(function(snapshot) {
        title2 = snapshot.val();
        console.log("title = ", snapshot.val());
        document.getElementById("title2").innerText = snapshot.val();
    });
    firebase.database().ref('/student2/photo').once('value').then(function(snapshot) {
        console.log("photo URL = ", snapshot.val());
        document.getElementById("photo2").src = snapshot.val();
    });
}

function Thomas() {
    var fName3;
    var lName3;
    var title3;
    var description3;
    firebase.database().ref('/student3/firstName').once('value').then(function(snapshot){
        fName3 = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Fname3").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student3/lastName').once('value').then(function(snapshot){
        lName3 = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("Lname3").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student3/description').once('value').then(function(snapshot) {
        description3 = snapshot.val();
        console.log("description =", snapshot.val());
        document.getElementById("description3").innerHTML = snapshot.val();
    });
    firebase.database().ref('/student3/title').once('value').then(function(snapshot) {
        title3 = snapshot.val();
        console.log("title = ", snapshot.val());
        document.getElementById("title3").innerText = snapshot.val();
    });
    firebase.database().ref('/student3/photo').once('value').then(function(snapshot) {
        console.log("photo URL = ", snapshot.val());
        document.getElementById("photo3").src = snapshot.val();
    });
}

function loop() {
    var i;
    var students = 1;
    for (i = 0; i < students; i++) {
        ourTeam();
    }
}
//firebase.js
var x = 0;
var fName;
function ourTeam(){
    Thomas();
    // retik();
    // loop();
    // triston();
}
function writeUserData() {
    firebase.database().ref('/email/').set({
        email: email
    });
}
// function triston(){
//     var fName;
//     var lName;
//     var title;
//     var description;
//
//     firebase.database().ref('/student1/firstName').once('value').then(function(snapshot){
//         fName = snapshot.val();
//         //console.log("Name =", snapshot.val());
//         document.getElementById("Fname").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student1/lastName').once('value').then(function(snapshot){
//         lName = snapshot.val();
//         //console.log("Name =", snapshot.val());
//         document.getElementById("Lname").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student1/description').once('value').then(function(snapshot) {
//         description = snapshot.val();
//         //console.log("description =", snapshot.val());
//         document.getElementById("description").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student1/title').once('value').then(function(snapshot) {
//         title = snapshot.val();
//         //console.log("title = ", snapshot.val());
//         document.getElementById("title").innerText = snapshot.val();
//     });
//     firebase.database().ref('/student1/photo').once('value').then(function(snapshot) {
//         //console.log("photo URL = ", snapshot.val());
//         document.getElementById("photo").src = snapshot.val();
//     });
// }

// function retik() {
//     var fName2;
//     var lName2;
//     var title2;
//     var description3;
//     firebase.database().ref('/student2/firstName').once('value').then(function(snapshot){
//         fName2 = snapshot.val();
//         //console.log("Name =", snapshot.val());
//         document.getElementById("Fname2").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student2/lastName').once('value').then(function(snapshot){
//         lName2 = snapshot.val();
//         //console.log("Name =", snapshot.val());
//         document.getElementById("Lname2").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student2/description').once('value').then(function(snapshot) {
//         description3 = snapshot.val();
//         //console.log("description =", snapshot.val());
//         document.getElementById("description2").innerHTML = snapshot.val();
//     });
//     firebase.database().ref('/student2/title').once('value').then(function(snapshot) {
//         title2 = snapshot.val();
//         //console.log("title = ", snapshot.val());
//         document.getElementById("title2").innerText = snapshot.val();
//     });
//     firebase.database().ref('/student2/photo').once('value').then(function(snapshot) {
//         //console.log("photo URL = ", snapshot.val());
//         document.getElementById("photo2").src = snapshot.val();
//     });
// }

function Thomas() {
    x = 1;
    var student = 'student' + x;

    console.log(student);
    firebase.database().ref(student +'/firstName').once('value').then(function(snapshot){
        //console.log("Name =", snapshot.val());
        document.getElementById("fName" + x).innerHTML = snapshot.val();
    });
    firebase.database().ref(student + '/lastName').once('value').then(function(snapshot){
        //console.log("Name =", snapshot.val());
        document.getElementById("Lname" + x).innerHTML = snapshot.val();
    });
    firebase.database().ref(student+ '/description').once('value').then(function(snapshot) {
        //console.log("description =", snapshot.val());
        document.getElementById("description" + x).innerHTML = snapshot.val();
    });
    firebase.database().ref(student + '/title').once('value').then(function(snapshot) {
        //console.log("title = ", snapshot.val());
        document.getElementById("title" + x).innerText = snapshot.val();
    });
    firebase.database().ref(student + '/photo').once('value').then(function(snapshot) {
        //console.log("photo URL = ", snapshot.val());
        document.getElementById("photo" + x).src = snapshot.val();
    });
}

function loop() {
    var i;
    x = 3;
    var name = "fName" + x;
    console.log ("first name = ", name);
    var students = 1;
    for (i = 0; i < students; i++) {
        firebase.database().ref('/student3/firstName').once('value').then(function(snapshot){
            console.log("Name =", snapshot.val());
            document.getElementById("Lname").innerHTML = snapshot.val();
        });
    }
}
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

    firebase.database().ref(student + '/firstName').once('value').then(function (snapshot) {
        console.log("First Name =", snapshot.val());
        document.getElementById("fName" + x).innerHTML = snapshot.val();
    });

    firebase.database().ref(student + '/lastName').once('value').then(function (snapshot) {
        console.log("Last Name =", snapshot.val());
        document.getElementById("lName" + x).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/title').once('value').then(function (snapshot) {
        console.log("title = ", snapshot.val());
        document.getElementById("title" + x).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/description').once('value').then(function (snapshot) {
        console.log("description = ", snapshot.val());
        document.getElementById("description" + x).innerText = snapshot.val();

    });
}

// contact us forms (writes to db now)
$(function(){

    //make a variable to keep track of data coming from firebase
    var data = [];

    //create new connection to firebase
    var ref = firebase.database().ref('/userMessage/message/');


    //listen to data updates from firebase

    ref.on("value", function (snapshot) {

        //when the data updates at firebase, put it in the data variable
        data = snapshot.val();

    })
)}
    
   
    
//Entire Form (handler)
$('#newActivity').submit(function(event) {
  
  var $form = $(this);
  console.log("Submit to Firebase");
  
  //disable submit button
  $form.find("#saveForm").prop('disabled', true);
  
  //get values to send to Firebase
  
  
  
   var fName = $('#first_Name').val();
  console.log(fName);
    var lName = $('#last_Name').val();
  console.log(lName);
    var email = $('#email').val();
  console.log(email);
  var theMessage = $('#messages').val();
  console.log(theMessage);
  
  //take the values from the form, and put them in an object
  var newActivity= {
    "First Name" : fName,
    "Last Name" : lName,
    "Email" : email,
    "Message" : theMessage
  }
  //put new object in data array
    data[data.length] = newActivity;
   
    //send the new data to Firebase
		ref.set(data, function(err){
            
      if(err){
        alert("Data no go");
      }
    });
    setTimeout(function() { window.location.reload(); }, 4000);q
    firebase.database().ref(student + '/photo').once('value').then(function(snapshot) {
        console.log("photo URL = ", snapshot.val());
        document.getElementById("photo" + x).src = snapshot.val();
    });
}


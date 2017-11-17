//firebase.js
var totalStudents; // number of total students


firebase.database().ref('/Students').once('value').then(function(snapshot){
    totalStudents = snapshot.val();
    console.log("there are " + totalStudents + " students");
});



function pull(arg) {
    console.log("test x = " + arg);
    var student = 'student' + arg;
    console.log(student);
    var fName = "fName" + x;

    firebase.database().ref(student+ '/firstName').once('value').then(function (snapshot) {
        console.log("First Name =", snapshot.val());
        document.getElementById("fName" + arg).innerHTML = snapshot.val();
    });
    firebase.database().ref(student + '/lastName').once('value').then(function (snapshot) {
        console.log("Last Name =", snapshot.val());
        document.getElementById("lName" + arg).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/title').once('value').then(function (snapshot) {
        console.log("title = ", snapshot.val());
        document.getElementById("title" + arg).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/description').once('value').then(function (snapshot) {
        console.log("description = ", snapshot.val());
        document.getElementById("description" + arg).innerText = snapshot.val();
    });

    firebase.database().ref(student + '/photo').once('value').then(function (snapshot) {
        console.log("photo = ", snapshot.val());
        document.getElementById("photo" + arg).src = snapshot.val();
    });
}

function loop() {
    var x = 0; //number of loops
    while(x < totalStudents) {
        x++;
        console.log("x = " + x);
        pull(x);
    }
}

// contact us forms (writes to db now)
$(function() {

    //make a variable to keep track of data coming from firebase
    var data = [];

    //create new connection to firebase
    var ref = firebase.database().ref('/userMessage/message/');

    //listen to data updates from firebase

    ref.on("value", function (snapshot) {

        //when the data updates at firebase, put it in the data variable
        data = snapshot.val();

    });

    
   
    
//Entire Form (handler)
$('#newActivity').submit(function(event) {
  
  var $form = $(this);
  console.log("Submit to Firebase");
  
  //disable submit button
  $form.find("#saveForm").prop('disabled', true);
  
  //get values to send to Firebase
  
  
  
   var in_fName = $('#first_Name').val();
  console.log(in_fName);
    var in_lName = $('#last_Name').val();
  console.log(in_lName);
    var in_email = $('#email').val();
  console.log(in_email);
  var in_theMessage = $('#messages').val();
  console.log(in_theMessage);
  
  //take the values from the form, and put them in an object
  var newActivity= {
    "First Name" : in_fName,
    "Last Name" : in_lName,
    "Email" : in_email,
    "Message" : in_theMessage
}
  //put new object in data array
    data[data.length] = newActivity;
   
    //send the new data to Firebase
		ref.set(data, function(err){
            
      if(err){
        alert("Data no go");
      }
    });
    setTimeout(function() { window.location.reload(); }, 4000);

    return false;
    });
});


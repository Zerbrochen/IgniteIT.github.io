//firebase.js
var totalStudents; // number of total students


firebase.database().ref('/Students').once('value').then(function(snapshot){
    totalStudents = snapshot.val();
});


function pull(arg) {
    var student = 'student' + arg;

    firebase.database().ref(student + '/firstName').once('value').then(function (snapshot) {
        document.getElementById("fName" + arg).innerHTML = snapshot.val();
        // var div = document.createElement("div");
        // var t = document.createTextNode(snapshot.val());
        // div.appendChild(t);
        // document.getElementById("fName" + arg).appendChild(div);
        // console.log(div);
    });

    firebase.database().ref(student + '/lastName').once('value').then(function (snapshot) {
        document.getElementById("lName" + arg).innerHTML = snapshot.val();
        // var div = document.createElement("div");
        // var t = document.createTextNode(snapshot.val());
        // div.appendChild(t);
        // document.getElementById("lName" + arg).appendChild(div);
        // console.log(div);

    });

    firebase.database().ref(student + '/title').once('value').then(function (snapshot) {
        document.getElementById("title" + arg).innerHTML = snapshot.val();
        // var div = document.createElement("div");
        // var t = document.createTextNode(snapshot.val());
        // div.appendChild(t);
        // document.getElementById("title"+ arg).appendChild(div);
        // console.log(div);

    });

    firebase.database().ref(student + '/description').once('value').then(function (snapshot) {
        document.getElementById("description" + arg).innerHTML = snapshot.val();
        // var div = document.createElement("div");
        // var t = document.createTextNode(snapshot.val());
        // div.appendChild(t);
        // document.getElementById("description"+ arg).appendChild(div);
        // console.log(div);

    });

    firebase.database().ref(student + '/photo').once('value').then(function (snapshot) {
        document.getElementById("photo" + arg).src = snapshot.val();
    });
}

// function useTemplate() {
//     var myTemplate = document.getElementById('myTemplate'),
//         normalContent = document.getElementById('normalContent'),
//         clonedTemplate = myTemplate.content.cloneNode(true);
//     normalContent.appendChild(clonedTemplate);
// }

function loop() {
    var x = 0; //number of loops

    while(x < totalStudents) {
        x++;
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


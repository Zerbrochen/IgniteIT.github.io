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
// Import Admin SDK
var database = firebase.database();
 



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

// contact us forms (writes to db now)
$(function(){
   
  //make a variable to keep track of data coming from firebase
  var data= [];
  
  //create new connection to firebase
	var ref= firebase.database().ref('/userMessage/message');
  

  //listen to data updates from firebase
	ref.on("value", function (snapshot){
    console.log(snapshot.val());
   //when the data updates at firebase, put it in the data variable
    data= snapshot.val();
    
  })
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
    
    
    alert("Submitted!!!");
    
  
    //send the new data to Firebase
		ref.set(data, function(err){
            
      if(err){
        alert("Data no go");
      }
    });
    setTimeout(function() { window.location.reload(); }, 100);

    return false;
  })
  
})


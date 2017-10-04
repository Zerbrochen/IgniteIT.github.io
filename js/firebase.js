//firebase.js

function ourTeam(){
    var fName;
    var title;
    var description;
    firebase.database().ref('/student1/name').once('value').then(function(snapshot){
        fName = snapshot.val();
        console.log("Name =", snapshot.val());
        document.getElementById("name").innerHTML = snapshot.val();
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
        document.getElementById("photo").src =snapshot.val();
    });

}

function writeUserData() {
    firebase.database().ref('/email/').set({
        email: email
    });
}
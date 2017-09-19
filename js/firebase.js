// Get a reference to the database service
var database = firebase.database();
function writeUserData(email) {
    database.ref(email).set({
        email: email
    });
}
var database = firebase.database();
function writeUserData(message) {
  firebase.database().ref('userMessage/' + message).set({
    message: message,
   
  });
}
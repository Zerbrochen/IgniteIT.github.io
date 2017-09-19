$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  
   $(document).ready(function(){
    $('.collapsible').collapsible();
  });


<script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0Vx2Bfil4ZJqQR0W3Gpb7aJZyeVAynIU",
    authDomain: "ignitedb-253e0.firebaseapp.com",
    databaseURL: "https://ignitedb-253e0.firebaseio.com",
    projectId: "ignitedb-253e0",
    storageBucket: "ignitedb-253e0.appspot.com",
    messagingSenderId: "673494478669"
  };
  firebase.initializeApp(config);
</script>
        

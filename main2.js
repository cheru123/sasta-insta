var firebaseConfig = {
    apiKey: "AIzaSyBuTaOmgdk0hKGlDbzkUGk0164fDm_zFvk",
    authDomain: "kwitter-4106e.firebaseapp.com",
    databaseURL: "https://kwitter-4106e-default-rtdb.firebaseio.com",
    projectId: "kwitter-4106e",
    storageBucket: "kwitter-4106e.appspot.com",
    messagingSenderId: "763759003413",
    appId: "1:763759003413:web:6561976c1ee16d8a934b1c"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  
username=localstorage.getitem ("username") 

document.getElementById("h2").innerHTML="WELCOME"+username;
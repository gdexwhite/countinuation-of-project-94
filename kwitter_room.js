var firebaseConfig = {
    apiKey: "AIzaSyDc227f9FD5qOUePheX1HaR9GB-lR-qPRw",
    authDomain: "project-94-e554d.firebaseapp.com",
    databaseURL: "https://project-94-e554d-default-rtdb.firebaseio.com",
    projectId: "project-94-e554d",
    storageBucket: "project-94-e554d.appspot.com",
    messagingSenderId: "869896204173",
    appId: "1:869896204173:web:ad6d39c29a01c8bf64d7c4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(username).update({
          me : "hello"
      })
      localStorage.setItem("room_name", room_name)
      
      window.location = "kwitter_room.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey
    console.log("room_name - ", room_name)
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML = row
  });});}
  getData();

  function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
}
  function logOut(){
    window.location = "index.html"
  }
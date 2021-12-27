var firebaseConfig = {
  apiKey: "AIzaSyAtN-wJZWhYHoJGKWfxZVuLaRV-9Guk0Dw",
  authDomain: "basic-funda-b7372.firebaseapp.com",
  projectId: "basic-funda-b7372",
  storageBucket: "basic-funda-b7372.appspot.com",
  messagingSenderId: "185714299914",
  appId: "1:185714299914:web:158d77d619065ec9cbbbf3"
};

firebase.initializeApp(firebaseConfig);
function submit(){
    nameContact = document.getElementById("nameInput").value;
    desc = document.getElementById("desc").value;
    firebase.database().ref("/").child(nameContact).update({
        purpose : desc
      });
}
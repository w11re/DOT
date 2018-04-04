var firebaseRef = firebase.database().ref();

function signUpClick() {
    var user = document.getElementById("uname").value;
    var pass = document.getElementById("psw").value;
    var mail = document.getElementById("email").value;

    firebaseRef.child('users').child("ethan").set({username:user, password:pass, email:mail});
    firebaseRef.value = '';

}

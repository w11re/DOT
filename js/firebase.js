var firebaseRef = firebase.database();
var usersRef = firebaseRef.ref("users");
var userId = 0;

// For user authentication
function authHandler(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
    // Set the gravatar
    document.getElementById('gravatar').src = authData.password.profileImageURL;
  }
}

// Log the user in with an email combination
messagesRef.authWithPassword({
  email    : 'a',
  password : 's'
}, authHandler);

messagesRef.onAuth(function(authData) {
   userId = authData.uid;
});
function signUpClick() {
    var user = document.getElementById("uname").value;
    var pass = document.getElementById("psw").value;
    var mail = document.getElementById("email").value;

    firebaseRef.ref('users/' + userId).set({username:user, password:pass, email:mail});
    firebaseRef.value = '';

}

function saveTest() {
    //var wpm = document.getElementById("").value;

    firebaseRef.child('typetests').child("ethan").push({test:"92"});
    firebaseRef.value = '';
}






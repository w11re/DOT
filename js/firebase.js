

function signUpClick() {

  var firebaseRef = firebase.database().ref();

  firebaseRef.child("Text").set("Asadfasss");

}

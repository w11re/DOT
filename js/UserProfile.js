var firebaseRef = firebase.database();
var usersRef = firebaseRef.ref("users");
var typeRef = firebaseRef.ref("typetests");
var userId = 0;
var myVar;
var modal = document.getElementById('id01');
var signup = document.getElementById('id02');

function myFunction() {

    if(typeof(Storage) !== "undefined") {
        if (localStorage.getItem("user") !== "Guest") {
            document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
        } else {
            document.getElementById("userNameHere").innerHTML = "Guest";
        }
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("userNameHere").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

}
            
function showText() {
    document.getElementById("titleContent").style.opacity = "1";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == signup) {
        signup.style.display = "none";
    }
}

// For user authentication
function authHandler(error, authData) {
  if (error) {
    console.log('Login Failed!', error);
  } else {
  }
}

// Log the user in with an email combination
messagesRef.authWithPassword({
  email    : 'lil',
  password : 'xan'
}, authHandler);

messagesRef.onAuth(function(authData) {
   userId = authData.uid;
});


function signUpClick() {
    var user = document.getElementById("usname").value;
    var pass = document.getElementById("psw").value;
    var mail = document.getElementById("email").value;

    firebaseRef.ref('users/' + userId).set({username:user, password:pass, email:mail});
    firebaseRef.value = '';

    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("user", user);
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    soFreshAndSoClean();

}

function saveTest() {
    //var wpm = document.getElementById("").value;

    firebaseRef.child('typetests').child("ethan").push({test1:"92"});

    firebaseRef.value = '';
}

function signIn() {
    if(typeof(Storage) !== "undefined") {
        var user = document.getElementById('uname').value;
        localStorage.setItem("user", user);
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    soFreshAndSoClean();
}

function signOut() {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("user", "Guest");
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    location.reload();
}

function soFreshAndSoClean() {
    location.reload();
}

function forUserProfile() {
    var user = localStorage.getItem("user");
    var example = document.getElementById("userInfoTest").value;
    var a = usersRef.orderByChild('username').equalTo(user).once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            document.getElementById("emailGoesHere").innerHTML = childData.email;
            document.getElementById("avgWPM").innerHTML = childData.avgWPM;
            document.getElementById("numberOfTests").innerHTML = childData.numberOfTests;

        });
    });
}

function appendTests() {
            window.alert("A");
    var user = localStorage.getItem("user");
    var example = document.getElementById("userInfoTest").value;
    var a = typeRef.orderByChild('user').equalTo(user).once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            
            window.alert(childData.wpm);
            

        });
    });
    
}



/*
$(document).ready(function(){
$( "#loginClicker" ).click(function() {
    alert("LOGIN TESTING");

  $.ajax({
    'url' : 'localhost:8080/dot',
    'type' : 'GET',
    beforeSend: function() {
                alert(1);
            },
    error: function() {
                alert('Error');
            },
    'success' : function(data) {
      if (data == "success") {
        alert('login request sent!');
      }
    }
  }); 
});
});
$('signup').click(function() {
    alert("SIGNUP TESTING");

  $.ajax({
    'url' : 'localhost:8080/dot',
    'type' : 'GET',
    beforeSend: function() {
                alert(1);
            },
    error: function() {
                alert('Error');
            },
    'success' : function(data) {
      if (data == "success") {
        alert('sign up request sent!');
      }
    }
  });
});
*/

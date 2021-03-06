var firebaseRef = firebase.database();
var usersRef = firebaseRef.ref("users");
var typeRef = firebaseRef.ref("typetests");
var userId = 0;
var myVar;
var modal = document.getElementById('id01');
var signup = document.getElementById('id02');

function myFunction() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.getItem("user") !== "Guest") {
            document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
        } else {
            document.getElementById("userNameHere").innerHTML = "Guest";
            document.getElementById("loginbutton").style.display = 'inline-block';
            document.getElementById("signupbutton").style.display = 'inline-block';
            document.getElementById("logoutbutton").style.display = 'none';

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
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == signup) {
        signup.style.display = "none";
    }
}


function signUpClick(user, pass, pass2, mail) {

    if (user == "" || pass == "" || pass2 == "" || mail == "") {
            document.getElementById("mod1").style.display = 'inline-block';
        return;
    }

    if (pass != pass2) {
            document.getElementById("mod2").style.display = 'inline-block';
        return;
    }
    var a = usersRef.orderByChild("username").equalTo(user).once('value').then(function (snapshot) {
        if (snapshot.val() !== null) {
            document.getElementById("mod3").style.display = 'inline-block';
            return;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(mail).toLowerCase())) {
            } else {
                var b = usersRef.orderByChild("email").equalTo(mail).once('value').then(function (snapshot) {
                    if (snapshot.val() !== null) {

                        return;
                    } else {
                        newUser(user, pass, pass2, mail);
                    }
                });
            }
        }
    });

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(mail).toLowerCase())) {
            document.getElementById("mod4").style.display = 'inline-block';
    } else {
        var b = usersRef.orderByChild("email").equalTo(mail).once('value').then(function (snapshot) {
            if (snapshot.val() !== null) {
            document.getElementById("mod5").style.display = 'inline-block';

                return;
            } else {
                var a = usersRef.orderByChild("username").equalTo(user).once('value').then(function (snapshot) {
                    if (snapshot.val() !== null) {
                        return;

                    } else {
                        newUser(user, pass, pass2, mail);
                    }
                });
            }
        });
    }
}


function newUser(user, pass, pass2, mail) {
    firebaseRef.ref('users/').push({ username: user, password: pass, email: mail, avgWPM: 0, numberOfTests: 0 });
    firebaseRef.value = '';

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("user", user);
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

    soFreshAndSoClean();
}

function saveTest() {
    //var wpm = document.getElementById("").value;
    firebaseRef.ref('typetests/').push({ typetest: "Traditional", user: localStorage.getItem("user"), wpm: 92 });
    var a = usersRef.orderByChild('username').equalTo(user).once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();

            document.getElementById("emailGoesHere").innerHTML = childData.email;
            document.getElementById("avgWPM").innerHTML = childData.avgWPM;
            document.getElementById("numberOfTests").innerHTML = childData.numberOfTests;

        });
    });
    firebaseRef.value = '';
}

function signIn(user, pass) {
    var a = usersRef.orderByChild("username").equalTo(user).once('value').then(function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var childData = childSnapshot.val();

                if (childData.username == user && childData.password == pass) {
                    if (typeof (Storage) !== "undefined") {
                        localStorage.setItem("user", user);
                        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
                        soFreshAndSoClean();
                    } else {
                        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
                    }
                } else {
            document.getElementById("mod0").style.display = 'inline-block';
                }
            });
        } else {
            document.getElementById("mod0").style.display = 'inline-block';
        }
    });
    firebaseRef.value = '';

}

function signOut() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("user", "Guest");
        document.getElementById("userNameHere").innerHTML = localStorage.getItem("user");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    location.reload();
}

function hideErrors() {
    document.getElementById("mod0").style.display = 'none';
    document.getElementById("mod1").style.display = 'none';
    document.getElementById("mod2").style.display = 'none';
    document.getElementById("mod3").style.display = 'none';
    document.getElementById("mod4").style.display = 'none';
    document.getElementById("mod5").style.display = 'none';

}

function soFreshAndSoClean() {
    location.reload();
}

function forUserProfile() {
    var user = localStorage.getItem("user");
    var example = document.getElementById("userInfoTest").value;
    var a = usersRef.orderByChild('username').equalTo(user).once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("emailGoesHere").innerHTML = childData.email;
            document.getElementById("avgWPM").innerHTML = childData.avgWPM;
            document.getElementById("numberOfTests").innerHTML = childData.numberOfTests;

        });
    });
}

function appendTests() {
    var user = localStorage.getItem("user");
    var example = document.getElementById("userInfoTest").value;
    var a = typeRef.orderByChild('user').equalTo(user).once('value').then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            var pre = document.createElement('li');
            pre.id = childData.name;
            pre.innerText = JSON.parse(JSON.stringify(childData.typetest + ": " + childData.wpm + "WPM"));
            document.getElementById('testsList').appendChild(pre);
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

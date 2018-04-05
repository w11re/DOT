// Get the modal
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
    myVar = setTimeout(showText, 1000);
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

function signIn(username) {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("user", "Ethan");
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
}

function soFreshAndSoClean() {
    location.reload();
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

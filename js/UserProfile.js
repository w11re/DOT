// Get the modal
var modal = document.getElementById('id01');
var signup = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == signup) {
        signup.style.display = "none";
    }
}

function soFreshAndSoClean() {
    location.reload();
}
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

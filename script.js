function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode")
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function validateForm() {
  let name = document.getElementById("fname").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
let errorMessage = document.getElementById("errorMessage");

  errorMessage.innerHTML = "";
  document.getElementById('errorMessage').style.color = "red"

  if (name.length <= 5) {
    errorMessage.innerHTML = "Name must be more than five characters long.";
    return false;
  }

  if (subject.length <= 1  ){
        errorMessage.innerHTML = "pelease write your code"
    return false;
  }

   if (!email.includes ('.') || !email.includes ('@')  ){
        errorMessage.innerHTML = "pelease enter a valid email address e.g example@gmail.com";
        return false;
  }

  if (number.length != 11) {
    errorMessage.innerHTML = "Please enter a valid phone number";
    return false;
  }
}

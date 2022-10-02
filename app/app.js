function init() {
  //run this function when the user clicks on 'Sign in' in form
  $("#submit").on("click", function (e) {
    e.preventDefault();

    //retrieve input values from fields using id
    let un = $("#username").val();
    let pass = $("#password").val();

    //if username isn't supplied, give the user a mad sweet alert

    if (un == "") {
      Swal.fire("Please enter your username.");
      //if password isn't supplied, give the user a mad sweet alert
    } else if (pass == "") {
      Swal.fire("Please enter your password.");
      //if neither are supplied, give the user a mad sweet alert
    } else if (un == "" && pass == "") {
      Swal.fire("Please enter your username and password.");
    } else {
      //if both are supplied, give the user a happy sweet alert
      Swal.fire("You are signed in!");

      //empty value fields after user signs in
      $("#username").val("");
      $("#password").val("");
    }
  });
}

//initiate the function
$(document).ready(function () {
  init();
});

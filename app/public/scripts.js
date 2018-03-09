console.log('script loded');

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
  form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      $('#myModal').modal('show');
    }
    form.classList.add('was-validated');


  }, false);
});



$("#submit").submit(function(event) {
  event.preventDefault();
  // Here we grab the form elements
  var newFried = {
    name: $("#name").val(),
    photo: $("#pic").val(),
    score: [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
      $("#question6").val(),
      $("#question7").val(),
      $("#question8").val(),
      $("#question9").val(),
      $("#question10").val(),
    ]
  }

  console.log(newFried);

  // This line is the magic. It"s very similar to the standard ajax function we used.
  // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // depending on if a tables is available or not.

  $.post("/api/friends", newFried,
    function(data) {

      // If a table is available... tell user they are booked.
      if (data) {
        console.log("Yay! You are officially booked!");
      }

      // If a table is available... tell user they on the waiting list.
      else {
        console.log("Sorry you are on the wait list");
      }


    });
  $.get("/api/friends", function(data) {
    console.log(data);
  });

});

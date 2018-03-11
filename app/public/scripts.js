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
      event.preventDefault();
      addToFriends(event);
    }
    form.classList.add('was-validated');
  }, false);
});



function addToFriends(event) {
  event.preventDefault();
  // Here we grab the form elements
  var myScore = [];

  function buildMyscoreArray(arr) {
    var data = [];
    for (var i = 1; i <= 10; i++) {
      arr.push(Number($(`#question${i}`).val()));
    }
    // return data;
  }
 buildMyscoreArray(myScore);

  var newFried = {
    name: $("#name").val(),
    photo: $("#pic").val(),
    score: myScore
  }

  console.log(newFried);

  $.get("/api/friends", function(data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].score);
    };
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
  });

};

$("#okBtn").on("click", function(event) {
  // location.reload();

})

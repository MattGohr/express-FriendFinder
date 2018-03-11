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
    var myBestie, myBestieVal, firstRun = true;

    for (var i = 0; i < data.length; i++) {

      var curFriendVal = 0;

      for (var j = 0; j < data[i].scores.length; j++) {
        var friendScore = data[i].scores[j];
        console.log(`fiend scores is ${friendScore} and my score is ${myScore[j]}`);

        curFriendVal = curFriendVal + Math.abs(friendScore - myScore[j]);
      }

      console.log(`current friend val is ${curFriendVal} and my bestie val is ${myBestieVal}`);

      if (firstRun) {
        myBestieVal = curFriendVal;
        myBestie = data[i];
        firstRun = false;
        console.log(`new bestie is ${data[i].name}`);
      } else if (curFriendVal < myBestieVal) {
        console.log(`new bestie is ${data[i].name}`);
        myBestie = data[i];
        myBestieVal = curFriendVal;
      };
    }
    $.post("/api/friends", newFried,
      function(isDataThere) {

        if (isDataThere) {
          console.log(`here's your data: \n${isDataThere}`);
        } else {
          console.log("There's no data for you!");
        }
      });
  });
};

$("#okBtn").on("click", function(event) {
  // location.reload();

})

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
    var friends = [];
    for (var i = 1; i <= 10; i++) {
      arr.push(parseInt($(`#question${i}`).val()));
    }
    console.log(arr);;
  }
  buildMyscoreArray(myScore);

  var newFried = {
    name: $("#name").val(),
    photo: $("#pic").val(),
    "scores": myScore
  }

  console.log(newFried);

  $.get("/api/friends", function(friends) {
    console.log(friends);
    var myBestie, myBestieVal, firstRun = true;

    for (var i = 0; i < friends.length; i++) {

      var curFriendVal = 0;

      for (var j = 0; j < friends[i].scores.length; j++) {
        var friendScore = friends[i].scores[j];
        console.log(`fiend scores is ${friendScore} and my score is ${myScore[j]}`);

        curFriendVal = curFriendVal + Math.abs(friendScore - myScore[j]);
      }

      console.log(`current friend val is ${curFriendVal} and my bestie val is ${myBestieVal}`);

      if (firstRun) {
        myBestieVal = curFriendVal;
        myBestie = friends[i];
        firstRun = false;
        console.log(`new bestie is ${friends[i].name}`);
      } else if (curFriendVal < myBestieVal) {
        console.log(`new bestie is ${friends[i].name}`);
        myBestie = friends[i];
        myBestieVal = curFriendVal;
      };
      console.log(`i = ${i}`);
    }

    console.log(`my bestie name ${myBestie.name}`);
    console.log(`my bestie photo ${myBestie.photo}`);

    $(`#bestieName`).text(myBestie.name);
    $(`#bestieImg`).attr('src', myBestie.photo);

    $('#myModal').modal('show');

    $.post("/api/friends", newFried,
      function(isDataThere) {
        console.log(`is your friends there ${isDataThere}`);
      });
  });
};

$("#okBtn").on("click", function(event) {
  location.reload();

})

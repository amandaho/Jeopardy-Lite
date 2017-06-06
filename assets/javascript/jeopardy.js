(function() {
  let score = $('#score');
  let answer;
  let numPoints;

  $(function() {
  $.get("http://jservice.io/api/random", function(data) {
    $.each(data, function(index, value) {
        $('#category').html(value.category.title);
        $('#points').html(value.value);
        $('#question').html(value.question);

        answer = value.answer;
        numPoints = value.value;

        console.log(value.answer);
        //console.log(value.value);
    });
  })

    let submitButton = $('#submitButton');
    let newQuestion = $('#newQuestion')

    function getText() {
      return $('#enterAnswer').val();
    }

   submitButton.click(function() {
     //console.log("submit button clicked");
     console.log(getText());
      if (getText() == answer){
       score.html(parseInt(score.html()) + numPoints);
        console.log("true");

       $.get("http://jservice.io/api/random", function(data) {
         $.each(data, function(index, value) {
           $('#category').html(value.category.title);
           $('#points').html(value.value);
           $('#question').html(value.question);

             answer = value.answer;
             numPoints = value.value;

            console.log(value.answer);
            //console.log(value.value);
         }, "json");

       })
     } else {
       console.log("false");

       $.get("http://jservice.io/api/random", function(data) {
         $.each(data, function(index, value) {
           $('#category').html(value.category.title)
           $('#points').html(value.value)
           $('#question').html(value.question)

             answer = value.answer;
             numPoints = value.value;

             console.log(value.answer);
             //console.log(value.value);
         }, "json");
        })
     }
   })
 })
})();

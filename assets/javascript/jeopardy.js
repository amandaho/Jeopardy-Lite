(function() {
  let score = $('#score');
  let answer;
  let numPoints;

  $(function() {

    function getQuestion(){

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
    }

    getQuestion();

    let submitButton = $('#submitButton');
    //let newQuestion = $('#newQuestion')

    function getText() {
      return $('#enterAnswer').val();
    }

    function clearText() {
      $('#enterAnswer').val('');
    }

   submitButton.click(function() {
     //console.log("submit button clicked");
     console.log(getText());
      if (getText() == answer){
       score.html(parseInt(score.html()) + numPoints);
        console.log("true");

      getQuestion();

      clearText();

     } else {
       console.log("false");

      getQuestion();

      clearText();

     }
   })
})
})();

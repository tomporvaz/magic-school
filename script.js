$(function() {
  $(".chevron-open").click(
    function() {
      $(this).hide();
      $('.sidebar').css('width', '320px');
    }
    );
    
  $(".chevron-close").click(
    function() {
      $('.sidebar').css('width', '70px')
      $(".chevron-open").show();
    }
    );
     
  //reveal hidden answer for social studies page
  $("#button-answer-social-studies").click(
    function() {
      $("#answer-to-social-studies").show();
    }
    );
    
    $('.mc-question').change(function(e) {
      let questionName = (e.target.name);
      let answerChoice = (e.target.value);
      
      //answer object
      let answers = {
        'q1': 'B',
        'q2': 'A',
        'q3': 'B',
        'q4': 'A',
        'q5': 'B',
        'q6': 'B'
      }
      
      //check if the answer is correct
      if(answers[questionName] === answerChoice){
        //if correct
        $(`#${e.target.name} .feedback`).css('background-image', 'radial-gradient(#c5d86d30, #c5d86d )').html(`Good Job!`);
      } else {
        //if incorrect
        $(`#${e.target.name} .feedback`).css('background-image', 'radial-gradient(#e71d3630, #e71d36 )').html(`Take another look at the examples in this lesson.`);
      }
    });

    //reveal hidden word definitions on english page
    $(".word-undefined").click(function(event) {
      let word = event.target.innerText;

      let definitions = {
        "forage": "search far and wide for food",
        "improvisation": "creating spontaneously, using whatever is available",
        "undulating": "moving with a wave-like motion",
        "errie": "spooky, unsettling",
        "writhed": "twisted or squirmed, ussually in pain",
        "tribute": "an act or gesture of respect and gratitude",
        "menacingly": "in a threatening, aggressive way",
        "morsel": "a very small bite of something"
      }

      if(definitions.hasOwnProperty(word)){
        $(this).siblings(".definition").text(definitions[word]);
      }
      

    })
  }
);
      
      
      
      
      
$(function() {
  $(".chevron-open").click(
    function() {
      $(this).hide();
      $('.sidebar').css('width', '320px');
    }
  )

  $(".chevron-close").click(
    function() {
      $('.sidebar').css('width', '70px')
      $(".chevron-open").show();
    }
  )

  $("#button-answer-social-studies").click(
    function() {
      console.log("SHOW.HIDE")
      $("#answer-to-social-studies").show();
    }
  )


});



$(function() {
/*   $(".chevron-open").click(function () {
    $('.sidebar').css('width', '320px');
    //$('.chevron-close').hide();
  }) */

  $(".chevron-close").click(function() {
    console.log("CLOSE")
    //$('.sidebar').css('width', '70px')
    //$('.chevron-open').show();
  })

  $(".chevron-open").click(
    function() {
      $(this).hide();
      console.log('OPEN')
      $('.sidebar').css('width', '320px');

    }
  )

  $(".chevron-close").click(
    function() {
      console.log('CLOSE');
      $('.sidebar').css('width', '70px')
      $(".chevron-open").show();
    }
  )
});



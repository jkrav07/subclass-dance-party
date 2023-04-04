$(document).ready(function() {
  window.dancers = [];

  $('.topbar').append('<a href="#" class="line-up">line up</a>');

  $('.line-up').on('click', function(event) {
    let counters = {};
    window.dancers.forEach(dancer => {
      dancer.lineUp(counters);
    });
  });

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

  });
});


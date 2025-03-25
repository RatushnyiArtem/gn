$(function() {
    const isMobile = window.innerWidth < 768;
  
    $('.cloud-left').hover(function() {
      $('h1').css('color', 'yellow');
    }, function() {
      $('h1').css('color', '');
    });
  
    $('.cloud-right').hover(function() {
      if (isMobile) {
        $('h1').text('code all night 😉').css({
          'font-size': '1.8em',
          'color': 'pink'
        });
      } else {
        $('h1').text('or code all night ; )').css({
          'font-size': '60px',
          'color': 'pink'
        });
      }
    }, function() {
      $('h1').text('Good Night!').css({
        'font-size': isMobile ? '2em' : '6em',
        'color': 'white'
      });
    });
  });
  
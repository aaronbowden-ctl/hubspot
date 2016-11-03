
  $(function() {
    $('li.nav-work a').hover( function() {
      $('li.nav-work ul.sub-menu').show();
    }, function() {
      $('li.nav-work ul.sub-menu').hide();
    });
    $('li.nav-solutions a').hover( function() {
      $('li.nav-solutions ul.sub-menu').show();
    }, function() {
      $('li.nav-solutions ul.sub-menu').hide();
    });
  });

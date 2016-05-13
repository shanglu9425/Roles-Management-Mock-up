function openRoles(e, module, value, application) {
  // Open Roles and change the background color
  $('.roles').show();
  // slideRectangle('.roles', 'animate-open');
  $('.panel-wrapper').removeClass('background-blue');
  $('.panel-wrapper').addClass('background-gray');

  // Remove selected class from previously selected item
  $(".selected").removeClass("selected");
  // Hide Assigned
  $('.assign').hide();
  // remove show from previous module
  $('.control-panel .container .show').removeClass('show');
  $('#application #sub-name-list').removeClass('show');


  // Add selected class to the clicked button
  $(e).addClass("selected");

  // Change Title
  $('.modal-header legend')[0].innerHTML = "<b>" +value + "<\/b>";

  // Open module
  $(module).addClass('show');
  $(application).addClass('show');
}

function openAssignment(e, application, assigned) {
  $('.assign').show();
  $('.panel-wrapper').removeClass('background-gray');
  $('.panel-wrapper').addClass('background-white');

  // Remove selected class from previously selected item
  $("#application.roles #sub-name-list .selected").removeClass("selected");
  // Remove show from previous application
  $('.control-panel .container .show').removeClass('show');
  $('#application #name-list').removeClass('show');

  // Add selected class to the clicked button
  $(e).addClass("selected");
  // Open application
  $(application).addClass('show');
  $(assigned).addClass('show');
}

/*
 * Animation Code
 */

 function slideRectangle(rectangle, style) {
  if (style == 'animate-open') {
    $(rectangle).css('opacity', '1');
  }

  $(rectangle).addClass(style);
  $(rectangle).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function (e) {
      $(rectangle).removeClass(style);
      $('.panel-wrapper').removeClass('background-blue');
      $('.panel-wrapper').addClass('background-gray');
      if (style == 'animate-close') {
        $(rectangle).css('opacity', '0');
      }
  });
 }

function openRoles(e, application, value) {
  // Open Roles and change the background color
  $('.roles').show();
  $('.panel-wrapper').removeClass('background-blue');
  $('.panel-wrapper').addClass('background-gray');

  // Remove selected class from previously selected item
  $(".selected").removeClass("selected");
  // Hide Assigned
  $('.assign').hide();
  // remove show from previous application
  $('.control-panel .container .show').removeClass('show');


  // Add selected class to the clicked button
  $(e).addClass("selected");

  // Change Title
  $('.modal-header legend')[0].innerHTML = "<b>" +value + "<\/b>";

  // Open application
  $(application).addClass('show');
}

function openAssignment(e, application) {
  $('.assign').show();
  $('.panel-wrapper').removeClass('background-gray');
  $('.panel-wrapper').addClass('background-white');

  // Remove selected class from previously selected item
  $("#application.roles #sub-name-list .selected").removeClass("selected");
  // Remove show from previous application
  $('.control-panel .container .show').removeClass('show');

  // Add selected class to the clicked button
  $(e).addClass("selected");
  // Open application
  $(application).addClass('show');
}

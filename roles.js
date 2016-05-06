function openRoles(e) {
  // Open Roles and change the background color
  $('.roles').show();
  $('.panel-wrapper').removeClass('background-blue');
  $('.panel-wrapper').addClass('background-gray');

  // Remove selected class from previously selected item
  $("#application.app #sub-name-list .selected").removeClass("selected");
  // Hide Assigned
  $('.assign').hide();


  // Add selected class to the clicked button
  $(e).addClass("selected");
}

function openAssignment(e) {
  $('.assign').show();
  $('.panel-wrapper').removeClass('background-gray');
  $('.panel-wrapper').addClass('background-white');

  // Remove selected class from previously selected item
  $("#application.roles #sub-name-list .selected").removeClass("selected");

  // Add selected class to the clicked button
  $(e).addClass("selected");
}

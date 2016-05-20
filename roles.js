function openRoles(e, app) {
  // Open Roles and change the background color
  openNavigationPanel('.roles');
  showData(app);

  // Hide Assigned
  if ($('.assign').is(':visible')) {
    closeNavigationPanel('.assign');
  }

  // Remove selected class from previously selected item
  $(".selected").removeClass("selected");
  // Add selected class to the clicked button
  $(e).addClass("selected");
  openControlPanel('.app', e.innerHTML);
}

function openAssignment(e, application, assigned) {
  // Adjust panel sizes
  openNavigationPanel('.assign');

  // Remove selected class from previously selected item
  $("#application.roleData #sub-name-list .selected").removeClass("selected");

  // Add selected class to the clicked button
  $(e).addClass("selected");
  openControlPanel(application, e.innerHTML);
}

function showData(app) {
  var pos = app.lastIndexOf('.');
  var toHide = app.substring(0, pos);
  $(toHide).hide();
  $(app).show();
}

function openNavigationPanel(panel) {
  $(panel).show();
  resizeNavigationPanels();
}

function resizeNavigationPanels() {
  switch($('.app-panel:visible').length) {
    case 1:
      $('.block').css("width", "");

      if ($('.col-md-4.background-blue').is(':visible')) {
        $('.col-md-4.background-blue').css("width", "60%");
      } else if ($('.col-md-4.background-gray').is(':visible')) {
        $('.col-md-4.background-gray').css("width", "60%");
      } else if ($('.col-md-4.background-white').is(':visible')) {
        $('.col-md-4.background-white').css("width", "60%");
      } else {
        console.log('There are no active navigation panels');
      }
      break;
    case 2:
      //
      $('.block').css("width", "100%");
      //
      if ($('.col-md-4.background-blue').is(':visible')) {
        $('.col-md-4.background-blue').css("width", "20%");

        if ($('.col-md-4.background-gray').is(':visible')) {
          $('.col-md-4.background-gray').css("width", "40%");
        } else {
          $('.col-md-4.background-white').css("width", "40%");
        }

      } else {
        $('.col-md-4.background-gray').css("width", "20%");
        $('.col-md-4.background-white').css("width", "40%");
      }
      break;
    case 3:
      $('.col-md-4.background-blue').css("width", "20%");
      $('.col-md-4.background-gray').css("width", "20%");
      $('.col-md-4.background-white').css("width", "20%");
      break;
    default:
      console.log("Something went wrong, there are " + activePanels + " active navigation panels");
  }
}

function closeNavigationPanel(panel) {
  $(panel).hide();
  resizeNavigationPanels();
}

function openControlPanel(module, value) {
  // remove show from previous module
  $('.control-panel .container .show').removeClass('show');
  // $('#application #sub-name-list').removeClass('show');


  // Change Title
  $('.modal-header legend').html("<b>" +value + "<\/b>");

  // Open module
  $(module).addClass('show');
  // $(application).addClass('show');
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

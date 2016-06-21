/*
 * Intro Start
 */

 $(document).ready(function() {
   $('#introduction').addClass('show');
 });

 /*
  * Functions
  */

function openRoles(e, app) {
  addAutoComplete('.add-autocomplete-role', app +' a')
  // Open Roles and change the background color
  openNavigationPanel('.roles');
  showData(app);
  // if first time open application, show the expand button
  $('#float-box').show();

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
  showData(assigned);

  // Update number of members for each panel group
  for(var i = 0; i < $(".member-count").length; i++) {
    var num = '#collapse' + (i + 1) + ' a';
    $(".member-count")[i].innerText = $(num).length;
  }

  // Remove selected class from previously selected item
  $(".role-lists .selected").removeClass("selected");

  // Add selected class to the clicked button
  $(e).addClass("selected");
  openControlPanel(application, e.innerHTML);
}

function openGroup(e) {
  var groupTitle = e.innerHTML.substring(0, e.innerHTML.indexOf("<"));
  openControlPanel('.assign-group', groupTitle);
  var members = $(e.getAttribute('href') + " .panel-body").length;
  $('#group-member-count').text(members);
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
  var controlPanelWidth = 40;
  // Amount to add to a panel's width in %
  var value = ($('.control-panel').is(':visible')) ? 0 : controlPanelWidth;
  // default size of panels
  var defaultSize = 0;

  // Switch is based on the number of panels open
  switch($('.app-panel:visible').length) {
    case 1:
      defaultSize = 60;
      value += defaultSize;

      $('.block').css("width", "");
      $('.block.role').css("width", "");

      if ($('.col-md-4.background-blue').is(':visible')) {
        $('.col-md-4.background-blue').css("width", value + "%");
      } else if ($('.col-md-4.background-gray').is(':visible')) {
        $('.col-md-4.background-gray').css("width", value + "%");
      } else if ($('.col-md-4.background-white').is(':visible')) {
        $('.col-md-4.background-white').css("width", value + "%");
      } else {
        console.log('There are no active navigation panels');
      }
      break;
    case 2:
      defaultSize = 40;
      value += defaultSize;
      //
      $('.block').css("width", "100%");
      $('.block.role').css("width", "");

      //
      if ($('.col-md-4.background-blue').is(':visible')) {
        $('.col-md-4.background-blue').css("width", "20%");

        if ($('.col-md-4.background-gray').is(':visible')) {
          $('.col-md-4.background-gray').css("width", value + "%");
        } else {
          $('.col-md-4.background-white').css("width", value + "%");
        }

      } else {
        $('.col-md-4.background-gray').css("width", "20%");
        $('.col-md-4.background-white').css("width", value + "%");
      }
      break;
    case 3:
      defaultSize = 20;
      value += defaultSize;
      $('.block.role').css("width", "100%");
      $('.col-md-4.background-blue').css("width", "20%");
      $('.col-md-4.background-gray').css("width", "20%");
      $('.col-md-4.background-white').css("width", value + "%");
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
  // open control panel if closed
  if ($('.control-panel').is(':hidden')) {
    toggleControlPanel('#toggle-button');
  }

  // remove show from previous module
  $('.module.show').removeClass('show');

  // Change Title
  $('.modal-header legend').html("<b>" +value + "<\/b>");

  // Open module
  $(module).addClass('show');
}

function toggleControlPanel(e) {
  $('.control-panel').toggle();
  if($('.control-panel').is(':visible')) { // Closing
    $(e).removeClass('fa-chevron-left');
    $(e).addClass('fa-chevron-right');
    $('#float-box').css("left", "58%");
    $('ul#name-list').css("-webkit-column-count","1");
    $('ul#name-list').css("-moz-column-count","1");
    $('ul#name-list').css("column-count","1");

    // Move X
    $('#button-close-role').css("left", "38%");
    $('#button-close-assign').css("left", "18%");
  } else { // Opening
    $(e).removeClass('fa-chevron-right');
    $(e).addClass('fa-chevron-left');
    $('#float-box').css("left", "97.3%");
    $('ul#name-list').css("-webkit-column-count","3");
    $('ul#name-list').css("-moz-column-count","3");
    $('ul#name-list').css("column-count","3");
    // Move X
    $('#button-close-role').css("left", "78%");
    $('#button-close-assign').css("left", "58%");
  }

  resizeNavigationPanels();
}

/*
 * Notification
 */

 function submit (msg, type) {
   $.notify({
  	// options
  	message: msg
  },{
  	// settings
  	type: type,
    z_index: 50000,
    animate: {
  		enter: 'animated fadeInDown',
  		exit: 'animated fadeOutUp'
	  },
    spacing: 0,
    offset: 0,
    delay: 1000
  });
 }

/*
 * Autocomplete and Token Code
 */

 function addAutoComplete(itemClass, itemValues) {
   var data = [];
   for (var i = 0; i < $(itemValues).length; i++) {
     data.push($(itemValues)[i].innerHTML);
   }

  $(itemClass).autocomplete({
    source: data,
    autoFocus: true,
    minLength: 2,
    delay: 100,
    select: function(e, ui) {
      openSelected(e, ui)
    }
  });
 }

 function openSelected(e, ui) {
   // Click the element
   var elements = $('a');
   var target = ui.item.label;

   for (var i = 0; i < elements.length; i++) {
     if(elements[i].innerHTML.indexOf(target) != -1) {
       elements[i].click();
     }
   }
 }

 $(function(mock_values) {
   var mock_values = [
     "Mark Diez",
     "Shang Lu",
     "Obada Kaldri",
     "Lloyd Wheeler",
     "Christopher Thielen",
     "Tom Lee",
     "Byran Mash",
     "Hanna Hurrison",
     "Daniel Jackson",
     "Steve Graphhin",
     "Thomas Livingston",
     "Andrew Kim",
     "Shawn Wang",
     "Anna Zhu"
   ];

   addAutoComplete('.add-autocomplete-app','#app-nav-panel a');

   // Add this class to an input to have auto-complete features only
   $('.add-autocomplete-people').autocomplete({
     source: mock_values,
     autoFocus: true,
     minLength: 2,
     delay: 100,
     select: function(e, ui) {
       openSelected(e, ui)
     }
   });

   $('.add-autocomplete').autocomplete({
     source: mock_values,
     autoFocus: true,
     minLength: 2,
     delay: 100
   });

   // Add this class to have tokens and auto-complete
   $('.add-token').tokenfield({
     autocomplete: {
       source: mock_values,
       autoFocus: true,
       minLength: 2,
       delay: 100
     }
   });

   // Makes sure avoid token repetition
   $('.add-token, .add-autocomplete').on('tokenfield:createtoken', function (event) {
     // Prevent adding non-existent person
     if(!findPerson(event.attrs.value, mock_values))
       event.preventDefault();

     // Prevent repeated names
     var existingTokens = $(this).tokenfield('getTokens');
     $.each(existingTokens, function(index, token) {
         if (token.value === event.attrs.value)
             event.preventDefault();
     });

   });

 });

 function findPerson(value, from) {

   for (var i = 0; i < from.length; i++) {
     if (value == from[i])
       return true;
   }
   return false;
 }

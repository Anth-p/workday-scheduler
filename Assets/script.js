// Variables
var container = $(".container");
var Body = $("body");
var date = $("#currentDay");
var timeDateToday = moment().format('dddd, MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');

var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var todos = ["", "", "", "", "", "", "", "", ""];

// Current Date
date.append(timeDateToday);

// Variables
var container = $(".container");
var Body = $("body");
var date = $("#currentDay");
var timeDateToday = moment().format('dddd, MMMM Do YYYY').toString();
var time = moment().format('h:mm:ss a');

var workHours = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var todos = ["", "", "", "", "", "", "", "", ""];

// Current Date
date.append(timeDateToday);

// Creating text boxes and save bottons
// If there is content in local storage, it'll automatically add to the page
var createRow = function() {
    for (i = 0; i < workHours.length; i++) {
      container.append(
        `<div class='row' id='bs-row${i}'>
          <div class='col-md-2 hour' id='hours-row${i}'>${workHours[i]}</div>
            <div contenteditable='true' class='col-md-8 textarea' id='input-row${i}'>
              ${todos[i]}
            </div> 
            <button class='col md-2 save-button' id='save${i}'>
              <i class='fa fa-save' id='save-image${i}'></i>
            </button>
        </div>`
      );
    }
  };

  createRow(workHours);

// event listener for when the save button is clicked
$(".save-button").click(function (event) {
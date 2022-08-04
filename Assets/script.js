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


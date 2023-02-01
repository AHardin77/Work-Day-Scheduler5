 //Display Current Date in Header
var currentDay = $("#currentDay");
currentDay.text (moment().format('dddd, MMM Do YYYY'));

//Find Current Hour
var currentHour = moment().hour();

var hour6 = moment().hour(6);
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14); 

//Format Text Areas
$(".time-block").each(function(){
  //Get Hour Value of Each Time Block
  var blockHour = $(this).attr("id").split("-")[1];
  //Get Saved Value from Local Storage and Display in Correct Time Block's Text Area
  var textEntry = localStorage.getItem(blockHour);
  var textArea = $(this).find(".description");
  textArea.val (textEntry);
  //Compare Current Hour to Time Block, Add Appropriate Class to Display Correct Color
  if (blockHour < currentHour){
      $(this).find(".description").addClass("past");
  }else if(blockHour == currentHour){
      $(this).find(".description").addClass("present");
  }else{
      $(this).find(".description").addClass("future");
   }
});
  
  //Save Button Clicked Function
$(".saveBtn").on("click", function(){
  //Key
  var key = $(this).parent().attr("id").split("-")[1];
  //Value
  var value = $(this).parent().find(".description").val();
  //Save Key and Value to Local Storage
  localStorage.setItem(key,value);
});
 
  
  

// JavaScript Document
// one lined comments 

/*
  Student name: nicholas newton
  File name: sctipts.js
  Date: 3/17/2022
*/

//Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Function to display the burpees example video
function burpees() {
	videoSource.src = "media/burpees-description.vtt";
	video.style.display = "block";
	video.load();
}

// Hamburger menu funtion
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display === "block" && logo.style.display === "none") {
    // Run this code if both are true
    /* programming languages equal sign is an assignment */
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    // Run this code if one or both are false
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

//function to display the plank example video
function plank() {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "media/plank-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Funtion to display the mountain climbers example video
function mountain() {
	videoSource.src = "media/mc.mp4";
	descriptionSource.src = "media/mountain-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display a promo code
function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: D25START";
	promo.style.color = "#ff0000";
	promo.style.fontSize = "2em";
}

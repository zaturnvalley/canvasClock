var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}

function renderTime() {
  // Time Variables
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();

  // Draw Background 

  // Draw Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)-90));
  ctx.stroke();

  // Draw Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
  ctx.stroke();
  // Draw Seconds

  // Date

  // Time
}
renderTime();
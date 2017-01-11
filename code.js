var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#07e85a';
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.shadowBlur = 8;
ctx.shadowColor = '#07e85a'

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
  var newSeconds = seconds + (milliseconds/1000);

  // Draw Background 
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,500,500);

  // Draw Hours
  ctx.beginPath();
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15)-90));
  ctx.stroke();

  // Draw Minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6)-90));
  ctx.stroke();
  // Draw Seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6)-90));
  ctx.stroke();

  // Date

  // Time
}
setInterval(renderTime, 40);
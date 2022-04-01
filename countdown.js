/********************  Countdown Module  **********************/

let yearOfNextBirthday = 2022;

// Set the date we're counting down to

// Update the count down every 1 second
let x = setInterval(function() {

  let countDownDate = new Date(`Apr 2, ${yearOfNextBirthday} 00:00:00`).getTime();
  const birthday = new Date(`Apr 2, ${yearOfNextBirthday}`);

  // Get today's date and time
  var now = new Date().getTime();  

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  message = days + "d " + hours + "h " + minutes + "m " + seconds + "s <br>until your next birthday!" ;

  currentDate = new Date()

  if (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() === birthday.getDate()) {
    yearOfNextBirthday = currentDate.getFullYear() + 1;
    clearInterval();
    document.getElementById("timer").innerHTML = "IT'S YOUR BIRTHDAY!<br>" + message;
  } else if (currentDate.getMonth() <= birthday.getMonth() && currentDate.getDate() < birthday.getDate() && currentDate.getFullYear() === birthday.getFullYear()) {
    document.getElementById("timer").innerHTML = message;
  } else if (distance < 0) {
    yearOfNextBirthday = currentDate.getFullYear() + 1;
  } else {
    document.getElementById("timer").innerHTML = message;
  }
}, 1000);

function getNextBirthday() {

}
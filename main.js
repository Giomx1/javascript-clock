setInterval(myClock, 1000);//1000 milliseconds is one second. My clock will keep going by one second

function myClock() {//function with variable myClock
  const date = new Date();// This constructor returns the current time. Since there is no parameters the current time will show.
  document.getElementById("myClock").innerHTML = date.toLocaleTimeString();//returns a string of the date, using locale conventions. 
}
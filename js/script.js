function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    // Format the time
    var timeString = hours.toString().padStart(2, '0') + ':' +
      minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0') + ' ' + ampm;
  
    // Format the date
    var dateString = now.toDateString();
  
    // Update the clock element
    document.getElementById('clock').innerHTML = timeString + '<br>' + dateString;
  }
  
  // Call updateClock() immediately
  updateClock();
  
  // Update the clock every second
  setInterval(updateClock, 1000);
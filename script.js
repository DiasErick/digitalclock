function getTime(){
    
    var dateTime = new Date();    
    var hours = dateTime.getHours().toString().padStart(2, "0");
    var minutes = dateTime.getMinutes().toString().padStart(2, "0");
    var seconds = dateTime.getSeconds().toString().padStart(2, "0");    
    var ampm = 'AM'
    if (hours >= 12){
        ampm = "PM"
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('ampm').innerHTML = ampm;
}

setInterval(getTime,10)
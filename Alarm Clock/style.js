var showTime = document.getElementById('show-time');
showTime.innerText = formatTime() ;


/// This is an array for storing the alarm set by user
var holdTime = []; 



//For Current Time
function formatTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
}

// Update the time initially
document.getElementById('show-time').innerText = formatTime();

// Update the time every second
setInterval(function() {
    document.getElementById('show-time').innerText = formatTime();
}, 1000);


// This is and add eventlistner on load it will show the stored array value in local storage to frontend after refreshing or opening
window.addEventListener('load', function() {
    const storedAlarms = localStorage.getItem('alarms');
    if (storedAlarms) {
        holdTime = JSON.parse(storedAlarms);
        updateAlarmList();
    }
});



//Function is adding an alarm when user sets an alarm and returning the that value
function addAlarm(alarm) {
    holdTime.push(alarm); 
    localStorage.setItem('alarms', JSON.stringify(holdTime));	
    return holdTime;
}


//This function adding the whatever data in frontend i.e alarm List 
function updateAlarmList() {
    const alarmListElement = document.getElementById("alarmList");

    // Check if the element with the ID "alarmList" exists
    if (alarmListElement) {
        // Clear the existing content of the alarmListElement
        alarmListElement.innerHTML = ""; 

        // Loop through the array of alarm times and add each time to the list
        holdTime.forEach(function(time, index) {
            const listItem = document.createElement("tr");
            const timeCell = document.createElement("td");
            const deleteCell = document.createElement("td");
            const deleteButton = document.createElement("button");

            timeCell.textContent = time;
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("class", "btn btn-danger");


            deleteButton.addEventListener("click", function() {
                
                holdTime.splice(index, 1);
                localStorage.setItem('alarms', JSON.stringify(holdTime));                
                updateAlarmList();
            });

            deleteCell.appendChild(deleteButton);
            listItem.appendChild(timeCell);
            listItem.appendChild(deleteCell);
            alarmListElement.appendChild(listItem);
        });
    }   
}





function setAlarm() {
    const hours = parseInt(document.getElementById('alarmHours').value);
    const minutes = parseInt(document.getElementById('alarmMinutes').value);
    const seconds = parseInt(document.getElementById('alarmSeconds').value);
    const meridian = document.getElementById('alarmMeridian').value;
    const alarmTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    if (isNaN(hours) || isNaN(minutes) ||isNaN(seconds)) {
        alert('Please Set Time Properly');
        return;
    }
    
    addAlarm(alarmTime); 
    updateAlarmList();
   
    setInterval(function() {
        const currentTime = formatTime(); // Get the current time
        var audio = new Audio('sound/mixkit-alert-alarm-1005.wav');  
        if (holdTime.includes(currentTime)) {                      
            audio.play();                       
            
        }
    }, 1000); 
}

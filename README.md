#Alarm Clock 
It is a Mini Project created using HTML, CSS, Bootstrap, and JavaScript.

Files Used:
        1.)index.html (Frontend Code).
        2.)style.css (CSS Code).
        3.)style.js (JavaScript Code).
        4.)Sound folder containing an alert sound used when the set time matches.

Design Explanation:  

        HTML, CSS, and Bootstrap:

        1.)Used <div> tags and Bootstrap classes for structuring and designing.
        2.)Utilized a form to obtain user input for setting the alarm time.
        3.)Implemented buttons for setting and deleting alarms.
        4.)Displayed the list of alarms set by the user using a table.
        
        JavaScript:
        
        In index.html:
            
            1.)Assigned class and ID names and used event listeners like onClick.
            
        In style.js:
        
            1.)Defined various functions for specific tasks.
            2.)formatTime(): Finds the current time and returns it in the format hour:minutes:seconds.
            3.)setAlarm(): Handles user input for setting an alarm.
            4.)Fetches hours, minutes, seconds, and meridian set by the user.
            5.)Checks for null values and prompts the user to set the time properly.
            6.)Invokes addAlarm() function to insert the alarm set by the user into an array and returns the alarms.
            7.)updateAlarm(): Displays the list of alarms in the frontend.
            8.)Implemented setInterval function with a callback function and a timing parameter in milliseconds.
            9.)Matches the current time with the user-set time, and if they match, triggers the alarm alert.
            10.)In built LocalStorage Function is used for holding the data on refresh.            


     This summarizes the implementation of the AlarmClock project.

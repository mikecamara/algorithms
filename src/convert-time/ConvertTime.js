
// TODO write a little test for this before commit to GitHub

function convertTime(input) {
    // var input = "12:45:54PM";

    var timeParts = input.split(":");
    
    var seconds = timeParts[2];
    var amOrPm = seconds.substring(2); 
    var hourConverted = -1;
    console.log(amOrPm )
    if (amOrPm === "AM"){
        if (parseInt(timeParts[0]) === 12){
            hourConverted = 0;
        } else if ((parseInt(timeParts[0]) < 10)){
            hourConverted = parseInt(timeParts[0]) ;
        }  else {
            hourConverted = parseInt(timeParts[0]);
        }
    } else {
        if ((parseInt(timeParts[0]) < 12)){
            hourConverted = parseInt(timeParts[0]) + 12;
        }  else {
            hourConverted = parseInt(timeParts[0]);
        }
    }

    var timeStringToConsole = "";

    if (hourConverted > 10){
        timeStringToConsole = hourConverted + ":" + timeParts[1] + ":" + seconds.substring(0,2);
    } else {

        var hourToPass = '' + hourConverted;

        timeStringToConsole = "0" + hourToPass + ":" + timeParts[1] + ":" + seconds.substring(0,2);
    }

    console.log(timeStringToConsole);
    return timeStringToConsole;
}


export default convertTime;
  
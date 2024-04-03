let hr = 0,min = 0, sec = 0,count = 0;

let timer = false;
// false = means timer is stop

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;min = 0;sec = 0;count = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
   
}

function stopwatch(){
    if(timer == true){
        count = count+1;

        if(count == 100){
            sec = sec+1;
            count = 0;
        }

        if(sec == 60){
            min = min+1;
            sec = 0;
        }

        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }
        let hrstring = hr;
        let minstring = min;
        let secstring = sec;
        let countstr = count;

        if(hr < 10){
            hrstring = "0" + hrstring;
        }

        if(min < 10){
            minstring = "0" +minstring;
        }

        if(sec < 10){
            secstring = "0"+secstring;
        }

        if(count < 10){
            countstr = "0"+countstr;
        }

        document.getElementById("hour").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minstring;

        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("count").innerHTML = countstr;
        setTimeout("stopwatch()",10);
    }
}
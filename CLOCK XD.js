function clock(){
    let date= new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours<12){
        document.getElementById("ampm").innerText="AM";
    }
    else{
        document.getElementById("ampm").innerText="PM";
    }
    let good=document.getElementById("good");

    if(hours>=4 && hours<12){
        good.innerText="Good Morning";
    }

    else if(hours>=12 && hours<16){
        good.innerText="GoodAfternoon";
    }

    else if(hours>=16 && hours<20){
        good.innerText="Good Evening";
    }

    if(hours>=20 && hours<24){
        good.innerText="Good Night";
    }
    if(hours>12){
        hours=hours-12;//for 24 to 12hours;
    }
    document.getElementById("hrs").innerText=hours;
    document.getElementById("mins").innerText=minutes;
    document.getElementById("secs").innerText=seconds;

    let btn=document.getElementById("set");
    btn.addEventListener("mouseover", changeText)

    
    btn.addEventListener("mouseout", changeText2)

    
    btn.addEventListener("click", changeText3)

    btn.addEventListener("click", ChangeMessageTheme)
}
setInterval(clock,1000);
function changeText(){
    let btn=document.getElementById("set");
    btn.innerText="PartyTime";
}

function changeText2(){
    let btn=document.getElementById("set");
    btn.innerText="SetAlarm";
}

function changeText3(){
    document.getElementById("wakeup").innerText=wakeuptime.options[wakeuptime.selectedIndex].text;
    document.getElementById("lunch").innerText=lunchtime.options[lunchtime.selectedIndex].text;
    document.getElementById("evening").innerText=eveningtime.options[eveningtime.selectedIndex].text;
    document.getElementById("night").innerText=nighttime.options[nighttime.selectedIndex].text;
}

function ChangeMessageTheme(){
    let dates = new Date();
    let hourss = dates.getHours();

    let textMessage = document.getElementById("grab");
    let theme = document.getElementById("img");


    if(parseInt(wakeuptime.value)===hourss)
    {
    textMessage.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
    theme.src="./goodmorning.svg"
    }
    else if(parseInt(lunchtime.value)===hourss)
    {
    textMessage.innerText="LET'S HAVE SOME LUNCH !!";
    theme.src="./lunch.svg"
    }
    else if(parseInt(eveningtime.value)===hourss)
    {
    textMessage.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    theme.src="./evening.png"
    }
    else if(parseInt(nighttime.value)===hourss)
    {
    textMessage.innerText="GREAT DAY AHEAD, GO TO SLEEP!!!";
    theme.src="./night.png"
    }
}



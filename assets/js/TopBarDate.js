function TopbarDate() {
    const letterMonth = ["jan.", "fev.", "mars", "avril", "mai", "juin", "juil", "aout", "sept.", "oct.", "nov.", "dec."];
    let len = letterMonth.length;
    let  resletterMonth = "";

    date = new Date();
    day = date.getDate();
    month = date.getMonth();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    for(let i=0; i < len; i++){
        if(month==i){
            resletterMonth= letterMonth[i];
            break;
        }else{
            continue;
        }
    }

    if(hour<10){
        hour= "0" + hour;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
                
    document.getElementById("current_date").innerHTML = day + " " + resletterMonth + " " + hour + ":" + minutes;
}
TopbarDate();
setInterval(TopbarDate, 1000);
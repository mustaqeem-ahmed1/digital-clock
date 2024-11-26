


let digitalClock = () => {
    let selectedElem = document.getElementsByTagName('span')
    // console.log(selectedElem[0].innerText);
    let dateObj = new Date()

    //todo: display current hours
    let curHrs = dateObj.getHours()
    selectedElem[0].innerText = curHrs      //using selected position val we make dynamic changes.

    //todo: display current minutes
    let curMin = dateObj.getMinutes()
    selectedElem[1].innerText = curMin

    //or can directly write like this. (by removing curMIn) 
    //  selectedElem[1].innerText = dateObj.getMinutes()
    
    //todo: display current secounds
    let curSec = dateObj.getSeconds()
    selectedElem[2].innerText = curSec

    //todo: display current day 
    let curDay = dateObj.getDate()
    selectedElem[3].innerText = curDay

    //todo: display current month
    let curMon = dateObj.getMonth()+1   //coz index starts from 0. so +1.
    switch (curMon) 
    {
        case 1: curMon = "Jan"
            break;
        case 2: curMon = "Feb"
            break;
        case 3: curMon = "Mar"
            break;
        case 4: curMon = "Apr"
            break;
        case 5: curMon = "May"
            break;
        case 6: curMon = "Jun"
            break;
        case 7: curMon = "Jly"
            break;
        case 8: curMon = "Aug"
            break;
        case 9: curMon = "Sep"
            break;
        case 10: curMon = "Oct"
            break;
        case 11: curMon = "Nov"
            break;
        case 12: curMon = "Dec"
            break;
    }
    selectedElem[4].innerText = curMon

    //todo: display current year
    let curYear = dateObj.getFullYear()
    selectedElem[5].innerText = curYear

    //todo: display current secounds
    let curD = dateObj.getDay()
    switch (curD) 
    {   case 1: curD = "Monday"
        break;
        case 2: curD = "Tuesday"
            break;
        case 3: curD = "Wednesday"
            break;
        case 4: curD = "Thursday"
            break;
        case 5: curD = "Friday"
            break;
        case 6: curD = "Saturday"
            break;
        case 7: curD = "Sunday"
            break;
    }
    selectedElem[6].innerText = curD
    //2nd container  ------------------------------------------------------
    selectedElem[7].innerText = dateObj.toLocaleTimeString()
    selectedElem[8].innerText = dateObj.toLocaleDateString()

}
digitalClock()
//can create the above code in 2 to 3 lines targeting the span.


















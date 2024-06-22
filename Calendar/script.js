const year = "2024";
let month = "01";
const d = new Date(year+"-"+month+"-01");
let firstDay = getDayTR(d.getDay());
document.getElementById("Month").innerHTML = "Ocak";
prepareCalendar(month);

function getDayTR(day){
    const arr = [6,0,1,2,3,4,5];
    return arr[day];
}

function getMonthTR(m){
    const arr = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    return arr[parseInt(m)-1];
}

function getRow(num){
    const arr = ["A","B","C","D","E","F"];
    return arr[num].toString();
}

function resetCalendar(){
    let n = 0;
    for(let i = 0;i < 6;i++){
        for(let j = 0;j < 7;j++){
            document.getElementById(getRow(i)+(j+1).toString()).innerHTML = "";
            n++;
        }
    }
    n++;
}

function prepareCalendar(m){
    resetCalendar();
    document.getElementById("Month").innerHTML = getMonthTR(m);
    const dt = new Date(year+"-"+m+"-01");
    firstDay = getDayTR(dt.getDay());
    let n = 1;
    for(let i = 0; i < 6; i++){
        
        if(i != 0){
        for(let j = 0; j < 7; j++){
            document.getElementById(getRow(i)+(j+1).toString()).innerHTML = n;
                if(n >= 31){
                    i= 7;//break nested loops;
                    break;
                }
                n++;
            }  
        }else{
            for(let j = firstDay; j < 7; j++){
                document.getElementById(getRow(i)+(j+1).toString()).innerHTML = n;
                n++;
            }  
        }
        
        n++;
    }
}

function leftClick(){
    let m = parseInt(month);
    if(m <= 10 && m > 1){
        month = "0"+ (m-1).toString();
    }else if(m>10 && m <13){
        month = (m-1).toString();
    }
    prepareCalendar(month);
}

function rightClick(){
    let m = parseInt(month);
    if(m <= 10){
        month = "0"+ (m+1).toString();
    }else if(m>10 && m <12){
        month = (m+1).toString();
    }
    prepareCalendar(month);
}
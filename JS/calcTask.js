let res = document.getElementById("result");
function addNumber(obj){
    let val = res.value;
    val+=Number(obj.innerHTML);
    res.value=Number(val);
}
let ch = '' ;
let ORes = 0 ; 
function add() {
    ch = '+';
    ORes+=Number(res.value);
    res.value = 0 ;
}
function sub() {
    ch = '-';
    if(ORes!=0)
    ORes-=Number(res.value);
    else {
        ORes+=Number(res.value);
    }
    res.value = 0 ;
}
function mul() {
    ch = '*';
    if(ORes){
        ORes*=Number(res.value);
        
    }    
    else {
        ORes = Number(res.value);
    } 
    res.value = 0 ;
}
function div() {
    ch = '/';
    if(ORes){
        ORes/=Number(res.value);
        
    }    
    else {
        ORes = Number(res.value);
    } 
    res.value = 0 ;
}

function eq() {
    if(ch == '+'){
        ORes+=Number(res.value);
        res.value = ORes ;
        ORes = 0 ;
    }
    else if(ch == '-'){
        ORes-=Number(res.value);
        res.value = ORes ;
        ORes = 0 ;
    }
    else if(ch == '*'){
        ORes*=Number(res.value);
        res.value = ORes ;
        ORes = 0 ;
    }
    else {
        if(res.value == 0){
            alert("You Can't Do This Shit!!!");
        }
        else {
            ORes/=Number(res.value);
            res.value = ORes;
            ORes = 0 ;
        }
    }
}
function C(){
    res.value = 0 ;
    ORes = 0 ;
}

function CE(){
    res.value = 0 ;
}

function del() {
    let val = res.value;
    if (val.length==1) {
        result.value = 0;
    } else {
        result.value = val.substring(0, val.length - 1);
    }
}
function saturdayFun (n) {
    if (n){
        return `This Saturday, I want to ${n}!`;
    } 
    else {   
    return `This Saturday, I want to roller-skate!`;
    }
}
function mondayWork (n) {
    if (n) {
        return `This Monday, I will ${n}.`
    }
    else {
        return `This Monday, I will go to the office.`
    }
}
 function wrapAdjective (p) {
    return function (n) {
        if (n) {
            return `You are ${p}${n}${p}!`
        }
        else {
            return `You are ${p}special${p}!`
        }
    }
 }   

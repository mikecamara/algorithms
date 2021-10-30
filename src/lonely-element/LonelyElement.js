function lonelyinteger(a) {
    // Write your code here
    var testedElements = [];
    var duplidatedElements = [];
    var soloElement = null;
    for(var i=0; i < a.length; i++) {
        if (testedElements.includes(a[i])){
            duplidatedElements.push(a[i]);
        } else {
            testedElements.push(a[i])
        } 
    }
    for(var i=0; i < a.length; i++) {
        if (duplidatedElements.includes(a[i])){
            continue;
        } else {
            soloElement = a[i];
            break;
        } 
    }   
    console.log(soloElement);
    return soloElement;
}

export default lonelyinteger;
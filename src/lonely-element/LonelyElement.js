function lonelyinteger(arrayWithNumbers) {
    var soloElement = null;
    const receivedNumbers = {};
    const duplidatedElements = {};
    const doYouHaveThisNumber = num => receivedNumbers[num] === true;
    const doYouHaveThisNumberDuplicated = num => duplidatedElements[num] === true;
    for(var i=0; i < arrayWithNumbers.length; i++) {
        if (doYouHaveThisNumber(arrayWithNumbers[i])){
            duplidatedElements[arrayWithNumbers[i]] = true;
        } else {
            receivedNumbers[arrayWithNumbers[i]] = true;
        }
    }

    for(var i=0; i < arrayWithNumbers.length; i++) {
        if (!doYouHaveThisNumberDuplicated(arrayWithNumbers[i])){
            soloElement = arrayWithNumbers[i];
            break;
        }
    }   
    return soloElement;
}

export default lonelyinteger;
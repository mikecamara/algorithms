
function plusMinus() {
    var arr = [-4, 3, -9, 0, 4, 1];
    var positives = 0;
    var negatives = 0;
    var zeros = 0;


    for (var i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] === 0) {
            zeros++;
        } else {
            negatives++;
        }
    }
    var arrayOfResults = [];
    arrayOfResults.push((positives/ arr.length).toFixed(6))
    arrayOfResults.push((zeros/ arr.length).toFixed(6))
    arrayOfResults.push((negatives/ arr.length).toFixed(6))
    // console.log(arrayOfResults)
    return arrayOfResults;
}

export default plusMinus;
  
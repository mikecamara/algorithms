
// TODO write a little test for this before commit to GitHub

function minMax(arr) {
    // var arr = [0,1,2,4,5];
    
    arr.sort(function(a, b) {
        return a - b;
    });

    var sumMin = 0;
    var sumMax = 0;

    for (var i=0; i < arr.length; i++) {
        if (i !== 0) {
            sumMax = sumMax + arr[i];
            if (i !== (arr.length - 1)) {
                sumMin = sumMin + arr[i];
            }
        } else {
            if (i !== (arr.length - 1)) {
                sumMin = sumMin + arr[i];
            }
        }
    }
    var arrayOfResults = [];
    arrayOfResults.push(sumMin)
    arrayOfResults.push(sumMax)
    // console.log(sumMin + "  "+sumMax);
    return arrayOfResults;    
}


export default minMax;
  
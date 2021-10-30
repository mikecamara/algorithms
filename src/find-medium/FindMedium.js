
function minMax(arr) {
    // var arr = [0,1,2,4,5];
    arr.sort(function(a, b) {
        return a - b;
    }); 
    var half = (arr.length)/2;
    console.log(Math.round(half));
    console.log(Math.floor(half) );
    // return [2,3]
    return Math.floor(half)
}


export default minMax;
  
function sumLowest(arr) {
    var a1 = Math.min(...arr);
    arr.splice(arr.indexOf(a1), 1);
    var a2 = Math.min(...arr);
    console.log(a1, a2);
    return a1 + a2;
}


var arr1 = [1, 2, 3, 4, 6];
console.log(sumLowest(arr1));
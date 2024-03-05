function increase(arr) {
    arr = arr.map((x, index) => (x + (index + 1)) % 10);
    return arr;
}


var arr1 = [1, 2, 3, 4, 6];
console.log(increase(arr1));
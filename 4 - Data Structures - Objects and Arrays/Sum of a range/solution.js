function range(start, end) {
    const arr = [];

    while (start <= end) {
        arr.push(start);
        start++;
    }

    return arr;
}

function sum(arr) {
    let s = 0;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }

    return s;
}

function rangeMod(start, end, modfier = 1) {
    //Pre ES6 solution for default parameter value
    //typeof modfier !== 'undefined' ? modfier : modfier = 1;
    const arr = [];

    if (start > end && modfier > 0 || start < end && modfier < 0){
        return 'Infinite loop';
    }

    if (start < end){
        while (start <= end) {
            arr.push(start);
            start += modfier;
        }
    }
    else if (start > end){
        while (start >= end) {
            arr.push(start);
            start += modfier;
        }
    }
    else{
        //Equal numbers
        return [start];
    }

    return arr;
}

console.log(rangeMod(1,10));
console.log(rangeMod(10,10));
console.log(rangeMod(1,10,2));
console.log(rangeMod(5,2, -1));
console.log(rangeMod(5,2, 1));
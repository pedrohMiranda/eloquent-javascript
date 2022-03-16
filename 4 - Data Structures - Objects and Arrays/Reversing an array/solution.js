function reverseArray(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }

    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < (arr.length / 2); i++) {
        [arr[i], arr[(arr.length - 1 - i)]] = [arr[(arr.length - 1 - i)], arr[i]]
    }

    return arr;
}



const array = [1, 2, 3, 4, 5, 6, 7];
const reversedArray = reverseArray(array);
console.log(array);
console.log(reversedArray);

const reversedInPlace = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(reversedInPlace);
console.log(reversedInPlace);
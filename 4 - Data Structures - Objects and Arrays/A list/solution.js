function arrayToList(arr) {
    let list = {};

    for (let i = arr.length - 1; i >= 0; i--) {
        if(i != arr.length - 1){
            list = {
                value: arr[i],
                rest: list
            };
        }
        else{
            list = {
                value: arr[i],
                rest: null
            };
        }
    }

    return list;
}

function listToArray(list) {
    const array = [];

    for (let node = list; node != null; node = node.rest) {
        array.push(node.value)
    }

    return array;
}

function prepend(element, list) {
    list = {
        value: element,
        rest: list,
    }

    return list;
}

function nth(list, number) {
    for (let i = 0, node = list; node != null; i++, node = node.rest) {
        if (i === number){
            return node.value;
        }
    }

    return 'Invalid nth position'
}

function recursiveNth(list, number) {
    if (number === 0){
        return list.value;
    }

    return recursiveNth((list.rest), (number - 1));;
}



let testArraytoList = arrayToList([1, 2, 3, 4, 5]);
console.log(testArraytoList);

let testListToArray = listToArray(testArraytoList);
console.log(testListToArray);

let testPrepend = prepend(0, testArraytoList);
console.log(testPrepend);
console.log(testArraytoList);
console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(recursiveNth(arrayToList([10, 20, 30]), 1));
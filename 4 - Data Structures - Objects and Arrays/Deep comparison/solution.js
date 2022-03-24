function deepEqual(value1, value2) {
    if (typeof(value1) !== 'object' && typeof(value2) !== 'object' && value1, value2 == null){
        return (value1 === value2)
    }

    let equal = true;

    function objEquality(value1, value2) {
        Object.keys(value1).forEach(key => {
            if (equal === false) return;
            
            if (typeof(value1[key]) === 'object' && value1[key] !== null){
                objEquality(value1[key], value2[key])
            }
            else if (value1[key] != value2[key]){
                equal = false;
                return;
            }
        });
    }

    objEquality (value1, value2);

    return equal;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {isnt: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false
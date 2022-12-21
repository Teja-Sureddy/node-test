// 3. Create a recursive function named: 'transformDoodles(list)' that accepts a multi-dimensional array of any data type and converts it to a uni-dimensional
// array. For example,
//   - transformDoodles([[1, 3], [true, "5"]]) should return [1, 3, true, "5"]
// Note, write a clearly defined explainable code for this implementation without using the Array.prototype.flat() in-built function.

// CMD: npm run doodles

output = transformDoodles([[1, 3], [true, "5"]])
console.log(output);

function transformDoodles(list) {
    var list = [];
    for (let i = 0; i <= list.length - 1; i++) {
        if (typeof (list[i]) == 'object') {
            list = list.concat(transformDoodles(list[i]));
        }
        else {
            list.push(list[i]);
        }
    }
    return list;
}

// making double element as single element with for of loop

function ra(x) {

    // while (x.length && x[x.length - 1] < 0) {
    //     x.pop();
    // }
    for (var i = x.length - 1; i >= 0; i--) {
        if (x[i] < 0) {

            x[i] = x[x.length - 1];
            x.pop();
        }
    }
    return x;
}

var x = [7, -2, 3, 4, 5, -1, 6, -3, -8, -11, 10, 12, 22];
let totalPositive = ra(x)
console.log(totalPositive);









// function ra(x) {

//     // while (x.length && x[x.length - 1] < 0) {
//     //     x.pop();
//     // }
//     for (var i = x.length - 1; i >= 0; i--) {
//         if (x[i] < 0) {

//             x[i] = x[x.length - 1];
//             x.pop();
//         }
//     }
//     return x;
// }

// var x = [7, -2, 3, 4, 5, -1, 6, -3, -8, -11, 10, 12, 22];
// let totalPositive = ra(x)
// console.log(totalPositive);
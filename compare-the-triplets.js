// // a: array b:array
// function compareTriplets(a, b) {
//     let alice = 0
//     let bob = 0

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             alice += 1
//         } else if (b[i] > a[i]) {
//             bob += 1
//         }

//     }
//     return [alice, bob]
// }

var middleNode = function (head) {
    let first = head.length % 2 === 0 ? head.length / 2 : (head.length - 1) / 2
    return head.slice(first)
};

console.log(middleNode([1, 2, 3, 4, 5,]));
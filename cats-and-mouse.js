// const cartsAndMouse = (x, y, z) => {
//     if (Math.abs(x - z) === Math.abs(y - z)) {
//         return "Mouse C"
//     } else if (Math.abs(x - z) < Math.abs(y - z)) {
//         return "Cat A"
//     } else {
//         return "Cat B"
//     }
// }

// console.log(cartsAndMouse(1, 3, 2));

var maximumWealth = function (accounts) {
    const nasabah = []
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            nasabah.push([accounts[i][j] + accounts[i][j + 1]])
        }
    }
    console.log(nasabah);
};

maximumWealth([[1, 2, 3], [3, 2, 1]])
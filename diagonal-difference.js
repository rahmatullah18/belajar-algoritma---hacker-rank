function diagonalDifference(arr) {
    // let hasil = 0
    let diagonal1 = 0
    let diagonal2 = 0
    for (let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i]
        diagonal2 += arr[i][arr.length - 1 - i]
    }
    return Math.abs(diagonal1 - diagonal2)
}

diagonalDifference([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
])

// arr[0][0] + arr[1, 1] + arr[2, 2]
// arr[0][2] + arr[1][1] + arr[2,0]
// primary diagonal = 1+2+3 = 6
// secondary diagonal = 3+2+1 = 6

// hasil | 6-6 | = 0
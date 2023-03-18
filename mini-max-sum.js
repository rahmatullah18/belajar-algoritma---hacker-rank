function miniMaxSum(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }

    // sum
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    console.log(total - max, total - min);
}

miniMaxSum([1, 2, 3, 4, 5])

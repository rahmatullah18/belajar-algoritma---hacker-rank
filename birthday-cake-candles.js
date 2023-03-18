function birthdayCake(arr) {
    const max = Math.max(...arr)
    let totalMax = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            totalMax += 1
        }
    }
    return totalMax
}

birthdayCake([4, 4, 1, 3])
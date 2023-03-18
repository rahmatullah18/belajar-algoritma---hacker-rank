function plusMinus(arr) {
    let positif = 0
    let negatif = 0
    let nol = 0
    const length = arr.length

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positif += 1
        } else if (arr[i] < 0) {
            negatif += 1
        } else {
            nol += 1
        }
    }

    console.log(positif / length);
    console.log(negatif / length);
    console.log(nol / length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
const angryProfesor = (k, a) => {
    let tepatWaktu = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            tepatWaktu += 1
        }
    }

    if (tepatWaktu < k) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(angryProfesor(2, [0, -3, 2, 1]));


// init variable tepatwaktu, telat
// perulangan jika i > 0 maka telat + 1 jika i <= 0 maka tepat+1
// jika k > telat return yes jika k <= tepat maka return no
const breakingTheRecords = (scores) => {
    let totalMax = 0
    let totalMin = 0
    let max = scores[0]
    let min = scores[0]

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i]
            totalMin += 1
        } else if (scores[i] > max) {
            max = scores[i]
            totalMax += 1
        }
    }
    return totalMax, totalMin
}
console.log(breakingTheRecords(12, 24, 10, 24));
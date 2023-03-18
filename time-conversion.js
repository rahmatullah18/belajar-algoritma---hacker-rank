function TimeConversion(s) {
    let jam = parseInt(s.slice(0, 2))
    let meniDetik = s.slice(2, s.length)
    const len = s.length
    const time = s.slice(len - 2, len)
    if (time === 'PM') {
        jam += 12
    } else if (time === "AM") {
        jam = '00'
    }

    const date = `${jam}${meniDetik}`.slice(0, 8)
    return date
}

console.log(TimeConversion('04:59:59AM'));
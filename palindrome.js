// kodok

const palindrom = (str) => {
    // convert ke huruf kecil
    const reverStr = str.split('').reverse().join('')
    // cek kondisi
    if (reverStr === str) return "YES"

    return "NO"
}

console.log(palindrom('pap'));
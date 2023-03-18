// ganjil sebelah kanan
// genap sebelah kiri
// halaman pertama sebelah kiri 0
// jika total halaman genap maka halaman terakhir sebelah kanan 0

const pageCount = (n, p) => {
    // n jumlah halaman
    // p halaman yang mau dituju
    // menampung berapa jumlah halaman yang akan dibalik
    let depan = Math.floor(p / 2)
    let belakang = Math.floor((n - p) / 2)
    if (p % 2 !== 0 && n - p === 1) {
        belakang++
    }
    if (belakang < depan) {
        return belakang
    }
    return depan
}

console.log(pageCount(5, 4));
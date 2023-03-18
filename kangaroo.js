const kangaroo = (x1, v1, x2, v2) => {
    // cek pertama apakah kecepatan kangaroo pertama lebih kecil dari kecepatan kangaroo kedua jika iya maka return NO
    if (v1 <= v2) {
        return "NO"
    }

    // cek apakah kangaroo 1 lebih kecil dari kangaroo 2
    while (x1 < x2) {
        x1 += v1
        x2 += v2
    }

    // cek jika x1 sama dengan x2 maka return yes jika tidak return 0
    return x1 === x2 ? "YES" : "NO"
}

console.log(kangaroo(0, 2, 5, 3));
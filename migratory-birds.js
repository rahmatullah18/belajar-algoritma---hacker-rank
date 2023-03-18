

const migrationBirds = (arr) => {
    let satu = 0
    let dua = 0
    let tiga = 0
    let empat = 0
    let lima = 0
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 1:
                satu += 1
                break;
            case 2:
                dua += 1
                break;
            case 3:
                tiga += 1
                break;
            case 4:
                empat += 1
                break;
            default:
                lima += 1;
        }
    }

    const max = Math.max(satu, dua, tiga, empat, lima)
    if (max === satu) {
        return 1
    } else if (max === dua) {
        return 2
    } else if (max === tiga) {
        return 3
    } else if (max === empat) {
        return 4
    } else if (max === lima) {
        return 5
    }
}

console.log(migrationBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3]));

// buat variable 1-5
// looping
// jika arr[i] === 1
// jika arr[i] === 2
// jika arr[i] ===3
// ....5
// jika true maka tambahkan satu
// lalu cari nilai paling tinggi dari variable gunakan funcction math.max
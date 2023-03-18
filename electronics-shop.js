const electronicShop = (keyboards, drives, b) => {
    let currentValue = -1
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] > currentValue && keyboards[i] + drives[j] <= b) {
                currentValue = keyboards[i] + drives[j]
            }
        }
    }
    return currentValue;
}

electronicShop([3, 1], [5, 2, 9], 10)

// belanja anna tidak boleh lebih dari 10 / b
// tapi harus mencari harga yang efisien sesuai misal 1 + 8 = 9

// init currentValue =  0 dan value = 0
// for besarang
// for pertama looping keyboard
// for kedua looping drives
// didalam looping beri kondisi
// jika nilai keyboard[i] + drivers[i] > currentValue && keyboards[i] + dirvers[i] < b maka set currentValue = keyboard[i] + drivers[i]
// beri lagi percabangan jika currentValue === b maka return b


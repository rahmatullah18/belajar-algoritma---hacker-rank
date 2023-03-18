// init pasang
// init counterObject
// lakukan perulangan
// dengan kondisi jika pada object counterObject tidak terdpat key-n dan value-n maka buat key dan value 1 misal 10:1
// jika ada maka object.n = object.n + 1
// lalu lakukan pengkondisian lagi jika object.n === 2 makata variable pairs bertambah satu dan reset lagi object.n = 0


const sockMerchant = (n, ar) => {
    let pasang = 0
    let counterPasang = {}

    for (let i = 0; i < n; i++) {
        if (!counterPasang[ar[i]]) {
            counterPasang[ar[i]] = 1
        } else {
            counterPasang[ar[i]] = counterPasang[ar[i]] + 1
            if (counterPasang[ar[i]] === 2) {
                pasang++
                counterPasang[ar[i]] = 0
            }
        }
    }

    return pasang
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
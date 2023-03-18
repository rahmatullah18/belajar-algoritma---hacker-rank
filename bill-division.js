const billDivision = (bill, k, b) => {
    let totalBayar = 0
    for (let i = 0; i < bill.length; i++) {
        totalBayar += bill[i]
    }

    const annaTrueBill = (totalBayar - bill[k]) / 2

    if (annaTrueBill === b) {
        console.log("Bon Appetit")
    } else {
        console.log(Math.abs(annaTrueBill - b))
    }
}

billDivision([3, 10, 2, 9], 1, 12);
// bill = makanan
// k alergi
// b jumlah bayar

// lakukan perulangan
// init variable totalBayar
// masukan kondisi dimana jika arr[i] === arr[k] maka jangan ditambahkan
// total_betul total bayar dibagi 2
// lakukan kondisi jika b == total_betul maka return Bon Appetit : total_betul
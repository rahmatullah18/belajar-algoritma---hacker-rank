// jika angka kelipatan 3 cetak fizz
// jika kelipatan 5 cetak buzz
// jika kelipatan 3 dan 5 maka fizzBuzz
const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
    // console.log();
}

fizzBuzz(30)

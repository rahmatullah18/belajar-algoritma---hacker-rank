const hurdleRace = (k, height) => {
    const max = Math.max(...height)
    if (max > k) return max - k
    return 0
}

// k nurmal jum
// heigh rintangan gawangs

console.log(hurdleRace(7, [1, 6, 3, 5, 2]));

// cari nilai max dari height
// jika max > k return max - k
// jika max < k return k
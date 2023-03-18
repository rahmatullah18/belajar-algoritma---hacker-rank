const viralAdvertising = (n) => {
  let shared = 5
  let cumulative = 0
  let liked = 0

  for (let i = 0; i < n; i++) {
    // jumlah like hari ke-
    liked = Math.floor(shared / 2)
    // total like
    cumulative += liked
    // jumlah share
    shared = liked * 3
  }
  return cumulative
}

console.log(viralAdvertising(3));
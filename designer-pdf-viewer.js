
const designerPdfViewer = (h, word) => {
    let numberOfAbjad = {}
    let abjad = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < h.length; i++) {
        for (let j = 0; j < abjad.length; j++) {
            numberOfAbjad[abjad[i]] = h[i]
        }
    }

    let temp = 0
    for (let i = 0; i < word.length; i++) {
        if (numberOfAbjad[word[i]] > temp) {
            temp = numberOfAbjad[word[i]]
        }
    }

    const result = temp * word.length
    return result
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"));

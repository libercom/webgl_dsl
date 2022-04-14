export function shuffle(array) {
    let result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

export function pick2RandomColor(array) {
    let result = shuffle(array).splice(0, 2);

    return result;
}

export function pickOneRandomColor(...arr) {
    let result = shuffle(arr).pop();

    return result;
}

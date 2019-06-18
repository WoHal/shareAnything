module.exports = function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const flag = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > flag) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return quickSort(left).concat(flag, quickSort(right));
}
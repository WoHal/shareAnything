module.exports = function heapSort(arr) {
    for (let j = arr.length; j > 0; j--) {
        buildMaxHeap(arr, j);
        swap(arr, 0, j - 1);
    }
    return arr;
}

function buildMaxHeap(arr, len) {
    for (let i = parseInt(len / 2, 10) - 1; i >= 0; i--) {
        heapify(arr, i, len);
    }
}

function heapify(arr, i, len) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < len && arr[i] < arr[left]) {
        swap(arr, i, left);
    }
    if (right < len && arr[i] < arr[right]) {
        swap(arr, i, right);
    }
}

function swap(arr, i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
}
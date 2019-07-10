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
    let largest = i;

    if (left < len && arr[largest] < arr[left]) {
        largest = left;
    }
    if (right < len && arr[largest] < arr[right]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest, len);
    }
}

function swap(arr, i, j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
}
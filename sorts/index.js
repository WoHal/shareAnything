const quickSort = require('./quickSort');
const heapSort = require('./heapSort');
const mergeSort = require('./mergeSort');

const data = [1, 9, 2, 4, 7, 10, 8];

console.log('quickSort: ', quickSort(data));

console.log('heapSort: ', heapSort([...data]));

console.log('mergeSort: ', mergeSort(data));
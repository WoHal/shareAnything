function addEvent(element, type, handler) {
	if (element.addListenerEvent) {
		element.addListenerEvent(type, handler, false);
	}
	else if (element.attachEvent) {
		element.attachEvent('on' + type, handler);
	}
	else {
		element['on' + type] = handler;
	}
}

function popupSort() {
	var data = document.getElementById('data').value.split(/\s+/);
	var temp;
	for (var i=0; i<data.length-1; i++) {
		for (var j=0; j<data.length-i; j++) {
			if (parseInt(data[j]) > parseInt(data[j+1])) {
				temp = data[j];
				data[j] = data[j+1];
				data[j+1] = temp;
			}
		}
	}
	var printData = data.join(" < ");
	document.getElementById('popup').innerHTML = printData;
}

var d = "";
function QuickSort(data, left, right) {
	if (left < right) {
		var low = left, high = right, key = data[low];
		while (low < high) {
			//从高往低遍历
			while (low < high && parseInt(data[high]) >= parseInt(key)) {
				high--;
			}
			if (low < high) {
				data[low++] = data[high];
			}
			//从低往高遍历
			while (low < high && parseInt(data[low]) <= parseInt(key)) {
				low++;
			}
			if (low < high) {
				data[high--] = data[low];
			}
			//交换两个元素的位置
		}
		data[low] = key;
		QuickSort(data, left, low-1);
		QuickSort(data, low+1, right);
	}
}
function quickSort() {
	var data = document.getElementById('data').value.split(/\s+/);
	QuickSort(data, 0, data.length-1);
	var printData = data.join(" < ");
	document.getElementById('quick').innerHTML = printData;
}

function mergeSort() {
	
}

function collection() {
	addEvent(document.getElementById('btnPopup'), 'click', popupSort);
	addEvent(document.getElementById('btnQuick'), 'click', quickSort);
	addEvent(document.getElementById('btnMerge'), 'click', mergeSort);
}

addEvent(window, 'load', collection)
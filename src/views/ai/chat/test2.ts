// 冒泡排序 
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) { //外层循环控制排序趟数
        for (var j = 0; j < len - 1 - i; j++) { //内层循环控制每一趟排序多少次
            if (arr[j] > arr[j + 1]) { //相邻元素比较，若逆序则交换（升序为左大于右，降序反之）
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
        }
    }
    return arr;
}
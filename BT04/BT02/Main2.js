// SS16_BT01_Nguyễn Bình Lam Nghi

function min(arr) {
    if (arr.length === 0) {
        return "Không có giá trị so sánh";
    }

    return Math.min(...arr);
};

let arr1 = [3, 5, 1, 8, -3, 7, 8];
console.log("Mảng gồm có: ", arr1);
console.log(`${min(arr1)} là số nhỏ nhất`);

let arr2 = [7, 12, 6, 9, 20, 56, 89];
console.log("Mảng gồm có: ", arr2);
console.log(`${min(arr2)} là số nhỏ nhất`);

let arr3 = [];
console.log("Mảng gồm có: ", arr3);
console.log(`${min(arr3)} là số nhỏ nhất`);

let arr4 = [0, 0, 0];
console.log("Mảng gồm có: ", arr4);
console.log(`${min(arr4)} là số nhỏ nhất`);
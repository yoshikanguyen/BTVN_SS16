// SS16_BT04_Nguyễn Bình Lam Nghi

function isEven (number) {
        return number % 2 === 0;
};

let input = prompt("Hãy nhập một số");
let result = isEven (Number(input));
console.log(result);
alert(result);
// SS16_BT01_Nguyễn Bình Lam Nghi

function processConfirm() {
    let answer = confirm("Press what you want");
    let result = '';
    if (answer === true) {
        result += "Excellent. We'll play a nice game of chess.";
    } else {
        result += "Maybe later then.";
    } return result;
};

alert(processConfirm());

function add() {
    let number = Number(document.getElementById('num1').value);
    let number1 = Number(document.getElementById('num2').value);
    let numbers = number + number1;
    document.getElementById('nums').innerText = numbers;
}
const buttonNums = document.querySelectorAll(".btn");

function getNumber() {
    buttonNums.forEach((buttonNum) => {
    buttonNum.addEventListener('click', () => {
    const number = buttonNum.textContent;
    console.log(number);
});
});
}
getNumber();


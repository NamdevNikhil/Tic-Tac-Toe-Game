let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "grey";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.innerText = "Tic Tac Toe";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.color = "black";
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("Winner", val1);
                showWinner(val1);
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
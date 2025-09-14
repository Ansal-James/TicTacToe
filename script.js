let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let result = document.querySelector("#result");
let turnX = true;
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnX==true){
            turnX=false;
            box.innerHTML = "X";

        }else{
            turnX=true;
            box.innerHTML = "O";
        }
        
        box.disabled = true;

        let winner = checkWinner();
        
        if (winner !== undefined){
            result.classList.add("result");
            document.querySelector("#result").innerHTML = winner + " Win the Game !..";
            
        }
        
    })
    
})

resetbtn.addEventListener("click", ()=>{
   
    boxes.forEach((box) => {
        
        box.disabled = false;
        box.innerHTML = "";
        turnX=true;
        box.classList.remove("line");
        result.innerHTML= "";
        
    })
    
})

const btnDisable = () => {
    for(let box of boxes){
        box.disabled =true;
    }
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let val0 = boxes[pattern[0]].innerText;
        let val1 = boxes[pattern[1]].innerText;
        let val2 = boxes[pattern[2]].innerText;
        
        if(val0 !=="" && val1 !=="" && val2 !==""){
            if(val0 === val1 && val1 === val2 ){
                for(let eachPattern of pattern){
                    boxes[eachPattern].classList.add("line");
                }
                btnDisable();
                return val0 ;
            }
        }
    }
}
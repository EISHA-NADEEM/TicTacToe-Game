document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti');
    const msg = document.getElementById('msg');
  
let boxes= document.querySelectorAll(".box");
let resetbutton= document.querySelector("#reset-btn");
let newGamebutton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let winner=document.querySelector("#msg");
let turnO= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
      
if(turnO)
{
    box.innerText="O";
    turnO=false;
}

else{
    box.innerText="X";
    turnO=true;
}
box.disabled= true;
checkWinner();
    });
});  
const disableBoxes=()=>
{
    for(let box of boxes)
{
     box.disabled=true;
}};
const enableboxes=()=>
    {
        for(let box of boxes)
    {
         box.disabled=false;
    box.innerText="";
        }};
    
    
        const createConfettiPiece = () => {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
            confettiContainer.appendChild(confettiPiece);
    
            setTimeout(() => {
                confettiPiece.remove();
            }, 5000);
        };
    
        const startConfetti = () => {
            for (let i = 0; i < 100; i++) {
                setTimeout(createConfettiPiece, i * 40);
            }
        };

        const showWinner=(winner)=>{
    
    msg.innerText=`Congratulations, Winner is ${winner}`;

    
    msgContainer.classList.remove("hide");

    disableBoxes();
    startConfetti();
};

const checkWinner=()=>{
    for( let pattern of winPatterns)
        {
let pos1Val=boxes[pattern[0]].innerText;
let pos2Val=boxes[pattern[1]].innerText;
let pos3Val=boxes[pattern[2]].innerText;

if(pos1Val !="" && pos2Val !="" && pos3Val !="")

    {if(pos1Val === pos2Val && pos2Val === pos3Val)
{
  
showWinner(pos1Val);

}
 }
}};

newGamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);

})
let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
let u_score=document.querySelector("#u_score")
let c_score=document.querySelector("#c_score")

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    });
});

let Getcompchoice=()=>{
    const choices=["rock","paper","scissors"]
    randIdx=Math.floor(Math.random()*3);
    return choices[randIdx];
}

let playGame=(userchoice)=>{
        console.log("user choice=",userchoice)
        let compchoice=Getcompchoice()
        console.log("computer choice=",compchoice)

        if(userchoice==compchoice){
            msg.innerText=("It's a Tie!")
            msg.style.backgroundColor="black"
        }
        else if(userchoice=="paper"){
            if(compchoice=="scissors"){
                compscore++
                msg.innerText=("you lose!")
                 msg.style.backgroundColor="red"
                 c_score.innerText=(compscore)
            }
            else{
                userscore++
                msg.innerText=("You Win!")
                 msg.style.backgroundColor="green"
                 u_score.innerText=(userscore)
            }
        }
        else if(userchoice=="rock"){
            if(compchoice=="scissors"){
                msg.innerText=("you Win!")
                userscore++
                msg.style.backgroundColor="green"
                u_score.innerText=(userscore)
            }
            else{
                msg.innerText=("You lose!")
                compscore++
                 msg.style.backgroundColor="red"
                 c_score.innerText=(compscore)
            }
        }
        else {
            if(compchoice=="rock"){
                msg.innerText=("you lose!")
                compscore++
                 msg.style.backgroundColor="red"
                 c_score.innerText=(compscore)
            }
            else{
                msg.innerText=("You Win!")
                userscore++
                 msg.style.backgroundColor="green"
                 u_score.innerText=(userscore)
            }
        }

}

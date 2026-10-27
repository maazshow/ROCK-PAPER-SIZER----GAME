let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".msg");
const uerscore = document.querySelector("#userscore");
const comscore = document.querySelector("#comscore");
//const background = document.querySelector("body");

//BACKGROUND CHANGE

const back = () => {
    if (userscore > compscore) {
        document.body.style.backgroundImage = 'url("forest.jpg")';
    }

    //else if (userscore < compscore) {
    //    document.body.style.backgroundImage = 'url("pkd.jpg")';
    //}



    else if (userscore == compscore) {
        document.body.style.backgroundImage = 'url("dr.jpg")';
    }
    else {
        document.body.style.backgroundImage = 'url("pkd.jpg")';
    }
   
   
};

// COMPUTER CHOICE
const compchoice = () => {
    const comp = ["rock", "paper", "sizer"];
    const randomindx = Math.floor(Math.random() * 3);

    return comp[randomindx];
};

// DRAW FUNCTION
const draw = () => {
    console.log("GAME DRAW");
    message.innerText = "GAME DRAW";

};

// SHOW WINNER
const winner = (userwin) => {

    if (userwin) {
        

        console.log("YOU ARE WINNER");
        message.innerText = "YOU WIN";
        userscore++;
        uerscore.innerText = userscore;
        

    } else {
        
        console.log("YOU LOSE");
        message.innerText = "YOU LOSE";
        compscore++;
        comscore.innerText = compscore;
       
       
    }
        
        back();

};

// PLAY GAME
const playgame = (userchoice) => {

    console.log("THE USER CHOICE =", userchoice);

    // Computer ki choice sirf ONE TIME generate karo
    const computerChoice = compchoice();

    console.log("THE COMPUTER CHOICE =", computerChoice);

    // DRAW
    if (computerChoice === userchoice) {

        draw();

    } else {

        let userwin = true;

        if (userchoice === "rock") {

            userwin = computerChoice === "paper" ? false : true;

        }
        else if (userchoice === "paper") {

            userwin = computerChoice === "sizer" ? false : true;

        }
        else {

            userwin = computerChoice === "rock" ? false : true;

        }

        winner(userwin);
    }
};

// CLICK EVENTS
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");

        console.log("choice was clicked", userchoice);

        playgame(userchoice);

    });

});
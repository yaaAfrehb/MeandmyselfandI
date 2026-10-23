function closeStatus() {
    document.getElementById("statusbox").style.display="none";
}

function closemssage() {
    document.getElementById("messagebox").style.display="none";
}

// answer button to joke

const button = 
document.getElementById("answerbutton");
const answer =
document.getElementById("answer");

button.addEventListener("click",
    function() {
        answer.hidden= !answer.hidden;

        if (answer.hidden) {
            button.textContent = "What?";
        } else {
            button.textContent = "Hide Answer";
        }
    }
);

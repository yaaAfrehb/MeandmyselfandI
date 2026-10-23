function closeStatus() {
    document.getElementById("statusbox").style.display="none";
}

function closemessage() {
    document.getElementById("messagebox").style.display="none";
}

// --- DRAGGING ENGINE ---
let activeElement = null;
let offsetX = 0;
let offsetY = 0;

function dragStart(event, elementId) {
    // Safety check: Do not drag if the user is clicking a button inside the title bar
    if (event.target.tagName === 'BUTTON') return;

    event.preventDefault();
    activeElement = document.getElementById(elementId);
    
    // Calculate cursor offset from the window's top-left corner
    offsetX = event.clientX - activeElement.offsetLeft;
    offsetY = event.clientY - activeElement.offsetTop;
    
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

function dragMove(event) {
    if (!activeElement) return;
    activeElement.style.left = (event.clientX - offsetX) + 'px';
    activeElement.style.top = (event.clientY - offsetY) + 'px';
}

function dragEnd() {
    activeElement = null;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
}


// --- WINDOW CONTROLS & JOKE ---
function closeStatus() {
    document.getElementById("statusbox").style.display = "none";
}

function closemessage() {
    document.getElementById("messagebox").style.display = "none";
}

const button = document.getElementById("answerbutton");
const answer = document.getElementById("answer");

button.addEventListener("click", function() {
    answer.hidden = !answer.hidden;

    if (answer.hidden) {
        button.textContent = "What?";
    } else {
        button.textContent = "Hide Answer";
    }
});



let level = 1;
let xp = 0;
let hp = 100;
let tasksCompleted = { pushups: false, pullups: false, running: false };

function completeTask(task, xpAmount) {
    if (!tasksCompleted[task]) {
        tasksCompleted[task] = true;
        gainXP(xpAmount);
        checkLevelCompletion();
    }
}

function gainXP(amount) {
    xp += amount;
    if (xp >= 100) {
        xp = 0;
        levelUp();
    }
    updateUI();
    showPopup("Reward!", "You gained " + amount + " XP!");
}

function levelUp() {
    if (level < 10) {
        level++;
        xp = 0;
        hp = 100;
        updateUI();
        updateQuestRequirements();
        showPopup("Quest Completed!", "Congratulations! You leveled up to Level " + level + "!");
    } else {
        showPopup("Game Completed!", "You have reached Level 10! Congratulations!");
        setTimeout(() => {
            location.href = 'new2.html';
        }, 3000);
    }
}

function updateQuestRequirements() {
    document.getElementById("pushup-count").innerText = 10 * level;
    document.getElementById("pullup-count").innerText = 10 * level;
    document.getElementById("running-count").innerText = level;
    tasksCompleted = { pushups: false, pullups: false, running: false };
    document.getElementById("pushups").checked = false;
    document.getElementById("pullups").checked = false;
    document.getElementById("running").checked = false;
}

function checkLevelCompletion() {
    if (tasksCompleted.pushups && tasksCompleted.pullups && tasksCompleted.running) {
        levelUp();
    }
}

function updateUI() {
    document.getElementById("level").innerText = level;
    document.getElementById("xp").innerText = xp;
    document.getElementById("hp").innerText = hp;
}

function showPopup(title, message) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
    
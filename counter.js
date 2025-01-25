let count = 0;

function increment() {
    count++;
    updateDisplay();
    // save();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function save() {
    localStorage.setItem('count', count);
    count = localStorage.getItem('count');
    console.log(count);
}

function updateDisplay() {
    document.getElementById('counter-display').textContent = count;
}

// Assuming you have buttons with IDs 'increment-btn', 'decrement-btn', and 'reset-btn'
document.getElementById('increment-btn').addEventListener('click', increment);
document.getElementById('decrement-btn').addEventListener('click', decrement);
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('save-btn').addEventListener('click', save); 
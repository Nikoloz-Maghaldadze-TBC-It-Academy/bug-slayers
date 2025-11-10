

export default function startCountdown(minutes, elementId) {
    let remainingSeconds = minutes * 60;
    const countdownEl = document.getElementById(elementId);

    if (!countdownEl) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }

    function updateDisplay() {
        const mins = Math.floor(remainingSeconds / 60);
        const secs = remainingSeconds % 60;
        countdownEl.textContent =
            `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    updateDisplay();

    const interval = setInterval(() => {
        remainingSeconds--;
        if (remainingSeconds <= 0) {
            clearInterval(interval);
            countdownEl.textContent = "Time is up!";
        } else {
            updateDisplay();
        }
    }, 1000);
}
    

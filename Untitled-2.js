function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[now.getDay()];
    const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById("date").innerText = `${day}, ${date}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
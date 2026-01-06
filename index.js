async function loadIP() {
const ipEl = document.getElementById("ip");
const statusEl = document.getElementById("status");


try {
const res = await fetch("https://api.ipify.org?format=json");
const data = await res.json();


ipEl.textContent = data.ip;
ipEl.classList.remove("loading");
statusEl.textContent = "✓ IP detected successfully";
} catch (err) {
ipEl.textContent = "Unable to fetch IP";
ipEl.classList.remove("loading");
statusEl.textContent = "✕ Error retrieving IP address";
statusEl.style.color = "#ef4444";
}
}


loadIP();
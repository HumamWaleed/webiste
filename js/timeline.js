const timelineData = [
    { year: "2020", event: "Started Law Degree at University of Baghdad", icon: "🎓" },
    { year: "2022", event: "Completed Personal Status Cases Training", icon: "⚖️" },
    { year: "2023", event: "Certified in Commercial Arbitration (SCCA)", icon: "📜" },
    { year: "2024", event: "Developed 5 Legal Telegram Bots", icon: "🤖" }
];

const timeline = document.getElementById('timeline');

timelineData.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.className = `timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`;
    entry.innerHTML = `
        <div class="timeline-badge">${item.icon}</div>
        <div class="timeline-content">
            <h3>${item.year}</h3>
            <p>${item.event}</p>
        </div>
    `;
    timeline.appendChild(entry);
});
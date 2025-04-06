const bots = [
    { name: "The Law Bot", url: "https://t.me/The_law4bot", icon: "⚖️" },
    { name: "Iraq Law Bot", url: "https://t.me/The_IRAQLLAW_bot", icon: "🇮🇶" }
];

const container = document.getElementById('bot-container');

bots.forEach(bot => {
    const card = document.createElement('div');
    card.className = 'bot-card';
    card.innerHTML = `
        <div class="bot-icon">${bot.icon}</div>
        <h3>${bot.name}</h3>
        <a href="${bot.url}" target="_blank" class="bot-link">Launch</a>
    `;
    container.appendChild(card);
});
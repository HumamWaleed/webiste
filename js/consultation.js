// Create floating button
const consultBtn = document.createElement('a');
consultBtn.href = '#contact';
consultBtn.className = 'floating-consult-btn';
consultBtn.innerHTML = '📅 Book Consultation';
document.body.appendChild(consultBtn);

// Add animation
setInterval(() => {
    consultBtn.style.transform = 'translateY(-5px)';
    setTimeout(() => {
        consultBtn.style.transform = 'translateY(0)';
    }, 1000);
}, 2000);
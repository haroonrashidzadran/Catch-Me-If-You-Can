document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const card = document.querySelector('.card');
    const thankYou = document.getElementById('thankYou');
    
    let clickCount = 0;
    
    yesBtn.addEventListener('click', function() {
        card.style.display = 'none';
        thankYou.classList.remove('hidden');
    });
    
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;
        moveButton();
        
        // Make the button harder to catch after each attempt
        if (clickCount > 3) {
            noBtn.style.transform = 'scale(0.9)';
        }
        if (clickCount > 6) {
            noBtn.style.transform = 'scale(0.8)';
        }
    });
    
    noBtn.addEventListener('mouseenter', function() {
        moveButton();
    });
    
    function moveButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        // Calculate safe boundaries
        const maxX = containerRect.width - btnRect.width - 20;
        const maxY = containerRect.height - btnRect.height - 20;
        
        // Generate random position
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        
        // Apply position
        noBtn.classList.add('moving');
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    }
});
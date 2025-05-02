document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const strings = [
        "Hi, I'm Seth.",
        "I'm a Software Engineering Student.",
        "I build web applications.",
        "I solve complex problems."
    ];
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentString = strings[stringIndex];
        
        if (isDeleting) {
            typingText.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentString.length) {
            isEnd = true;
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
            isEnd = false;
        }
        
        const speed = isDeleting ? 50 : isEnd ? 1000 : 100;
        setTimeout(type, speed);
    }
    
    setTimeout(type, 1000);
});
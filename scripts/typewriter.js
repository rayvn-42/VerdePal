function typeWriter(element, speed = 100) {
    const originHTML = element.innerHTML;
    let out = '';
    let i = 0;

    function type() {
        if (i < originHTML.length) {
            const char = originHTML[i];

            if (char === '<') {
                let tag = '<';
                i++;
                while (i < originHTML.length && originHTML[i] !== '>') {
                    tag += originHTML[i];
                    i++;
                }
                tag += '>';
                out += tag;
                element.innerHTML = out;
                i++;
                setTimeout(type, 0);
            } else {
                out += char;
                element.innerHTML = out;
                i++;
                setTimeout(type, speed);
            }
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero .text .big');
    if (heroText) {
        typeWriter(heroText, 100);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const burger_toggle = document.getElementById('burger-toggle');
    const mobile_menu = document.getElementById('mobile-menu');

    burger_toggle.addEventListener('click', () => {
        burger_toggle.classList.toggle('active');
        mobile_menu.classList.toggle('active');

        if (mobile_menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'hidden';
        }
    });

    const mobile_links = mobile_menu.querySelectorAll('a');
    mobile_links.forEach(link => {
        link.addEventListener('click', () => {
            burger_toggle.classList.remove('active');
            mobile_menu.classList.remove('active');
            document.body.style.overflow = 'hidden';
        });
    });
});
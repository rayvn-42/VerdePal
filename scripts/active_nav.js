const curPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === curPage) {
        link.querySelector('.nav-link').classList.add('active');
    }
})
function showToast(message, type='success', duration = 3000) {
    let toast = document.querySelector('.toast');

    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast)
    }

    toast.classList.remove('toast-success', 'toast-error', 'toast-warning');

    let toast_type = `toast-${type}`;

    toast.classList.add(toast_type);

    toast.textContent = message;

    toast.style.transform = `translate(-50%, 0)`;
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.transform = `translate(-50%, -150%)`;
        toast.style.opacity = '0';
    }, duration);
}
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    // If already logged in, redirect to dashboard
    if (sessionStorage.getItem('menzgroom_admin_logged_in') === 'true') {
        window.location.href = 'dashboard.html';
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === 'admin' && password === 'MZ@2026') {
                // Success
                sessionStorage.setItem('menzgroom_admin_logged_in', 'true');
                window.location.href = 'dashboard.html';
            } else {
                // Error
                loginError.textContent = 'Invalid username or password.';
                loginError.style.display = 'block';
            }
        });
    }
});

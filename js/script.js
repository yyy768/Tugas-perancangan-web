document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = {
        name: "William Wijaya",
        email: "William.wijaya@gmail.com",
        joinDate: "1 Januari 2025"
    };

    const usernameDisplay = document.getElementById('username-display');
    if (usernameDisplay) {
        usernameDisplay.textContent = loggedInUser.name.split(' ')[0]; 
    }

    const profileName = document.getElementById('profile-name');
    if (profileName) {
        profileName.textContent = loggedInUser.name;
        document.getElementById('profile-email').textContent = loggedInUser.email;
        document.getElementById('profile-join-date').textContent = `Bergabung sejak ${loggedInUser.joinDate}`;
    }

const registerForm = document.getElementById('register-form');

if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Semua kolom wajib diisi!');
            return;
        }

        if (password.length < 8) {
            alert('Kata sandi minimal harus 8 karakter.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Konfirmasi kata sandi tidak cocok!');
            return;
        }

        alert(`Pendaftaran untuk ${fullName} berhasil! Anda akan diarahkan ke halaman Beranda.`);
        
        window.location.href = '../beranda/beranda.html';
    });
}
});
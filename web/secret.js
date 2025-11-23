function checkPwd() {
    var pwd = document.getElementById('pwd').value;
    var err = document.getElementById('err');
    if (pwd === 'iegnvsifwesdv') {
        window.location.replace('cheat.html');
    } else {
        err.textContent = '密码错误';
    }
}
document.getElementById('pwd').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') checkPwd();
});

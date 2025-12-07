const check = document.getElementById('human-check');
const btn = document.getElementById('submit-btn');
const container = document.getElementById('main-container');

check.addEventListener('change', function () {
    if (check.checked) {
        btn.disabled = false;
        btn.classList.add('active');
    } else {
        btn.disabled = true;
        btn.classList.remove('active');
    }
});

btn.addEventListener('click', function () {
    container.innerHTML = `
        <div class="contact-info">
            <div class="info-item">
                <span class="info-label">电话</span>
                <span class="info-text">15671972078</span>
            </div>
            <div class="info-item">
                <span class="info-label">QQ</span>
                <span class="info-text">530696547</span>
            </div>
            <div style="margin-top: 32px; text-align: center;">
                <a href="index.html" class="back-btn">返回主页</a>
            </div>
        </div>
    `;
});

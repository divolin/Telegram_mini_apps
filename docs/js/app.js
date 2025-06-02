/* eslint-env browser */
const tg = window.Telegram.WebApp;
tg.ready();      // говорим Telegram, что приложение загружено
tg.expand();     // разворачиваем WebView на весь экран :contentReference[oaicite:3]{index=3}

const nameInput = document.getElementById('nameInput');
const sendBtn = document.getElementById('sendBtn');

function validate() {
    sendBtn.disabled = !nameInput.value.trim();
}
nameInput.addEventListener('input', validate);
validate();

sendBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;
    tg.sendData(JSON.stringify({ name }));   // шлём данные в бот :contentReference[oaicite:4]{index=4}
    tg.close();                              // закрываем мини-апп
});

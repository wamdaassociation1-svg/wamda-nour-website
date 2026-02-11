// مصفوفة الترجمة المركزية للموقع (4 لغات)
const translations = {
    'ar': {
        'nav-login': "الدخول",
        'nav-donate': "تبرع الآن",
        'nav-contact': "اتصل بنا",
        'noor-msg': "مرحبا! أنا نوري، مساعد ومضة نور 🌟 قولي... إزاي أقدر أساعدك النهاردة؟ 😊"
    },
    'en': {
        'nav-login': "Login",
        'nav-donate': "Donate Now",
        'nav-contact': "Contact Us",
        'noor-msg': "Hello! I am Noor, Wamda Nour assistant 🌟 How can I help you today? 😊"
    },
    'es': {
        'nav-login': "Acceso",
        'nav-donate': "Donar Ahora",
        'nav-contact': "Contáctenos",
        'noor-msg': "¡Hola! Soy Noor, asistente de Wamda Nour 🌟 ¿Cómo puedo ayudarte hoy? 😊"
    },
    'fr': {
        'nav-login': "Connexion",
        'nav-donate': "Faire un don",
        'nav-contact': "Contactez-nous",
        'noor-msg': "Bonjour! Je suis Noor, assistant de Wamda Nour 🌟 Comment puis-je vous aider aujourd'hui? 😊"
    }
};

// وظيفة تغيير اللغة وتحديث المحتوى
function changeLanguage(lang) {
    // 1. ترجمة العناصر التي تحمل خاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // 2. تحديث نص رسالة "نوري" الذكي
    const noorText = document.querySelector('#noor-ai-assistant .absolute');
    if (noorText) {
        noorText.innerText = translations[lang]['noor-msg'];
    }

    // 3. تغيير اتجاه الصفحة (RTL للعربية فقط)
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // 4. حفظ اللغة المختارة في المتصفح لضمان استمرارها عند التنقل بين الصفحات
    localStorage.setItem('selectedLang', lang);
}

// ربط أزرار قائمة اللغات بالوظيفة البرمجية
document.addEventListener('DOMContentLoaded', () => {
    const langLinks = document.querySelectorAll('.group div a');
    const languages = ['ar', 'en', 'fr', 'es'];

    langLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            changeLanguage(languages[index]);
        });
    });

    // تحميل اللغة المحفوظة مسبقاً عند فتح الصفحة
    const savedLang = localStorage.getItem('selectedLang') || 'ar';
    changeLanguage(savedLang);
});

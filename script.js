// قاموس الترجمة الشامل (بما في ذلك نوري المساعد الذكي)
const translations = {
    ar: {
        "nav-login": "الدخول",
        "nav-donate": "تبرع الآن",
        "nav-contact": "اتصل بنا",
        "hero-title": "نضيء دروب <span class='text-brandCyan'>الخير</span> ونصنع أثر مستدام",
        "hero-btn": "مبادراتنا الميدانية",
        "ai-greet": "مرحبا! أنا نوري، مساعد ومضة نور 🌟 قولي... إزاي أقدر أساعدك النهاردة؟ 😊"
    },
    en: {
        "nav-login": "Login",
        "nav-donate": "Donate Now",
        "nav-contact": "Contact Us",
        "hero-title": "Lighting paths of <span class='text-brandCyan'>Goodness</span> for a sustainable impact",
        "hero-btn": "Our Field Initiatives",
        "ai-greet": "Hi! I'm Noor, Wamda Noor's assistant 🌟 Tell me... how can I help you today? 😊"
    },
    fr: {
        "nav-login": "Connexion",
        "nav-donate": "Faire un don",
        "nav-contact": "Contactez-nous",
        "hero-title": "Éclairer les chemins du <span class='text-brandCyan'>Bien</span> pour un impact durable",
        "hero-btn": "Nos Initiatives",
        "ai-greet": "Salut! Je suis Noor, l'assistant de Wamda Noor 🌟 Dites-moi... comment puis-je vous aider aujourd'hui ? 😊"
    },
    es: {
        "nav-login": "Acceso",
        "nav-donate": "Donar Ahora",
        "nav-contact": "Contáctenos",
        "hero-title": "Iluminando caminos de <span class='text-brandCyan'>Bien</span> para un impacto sostenible",
        "hero-btn": "Nuestras Iniciativas",
        "ai-greet": "¡Hola! Soy Noor, el asistente de Wamda Noor 🌟 Dime... ¿cómo puedo ayudarte hoy? 😊"
    }
};

// وظيفة تغيير اللغة
function changeLanguage(lang) {
    // 1. تغيير اتجاه الصفحة (عربي = من اليمين، الباقي = من اليسار)
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // 2. تحديث النصوص التي تحمل معرف data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 3. تحديث رمز اللغة الظاهر في النيفبار (AR, EN, FR, ES)
    const langSpan = document.querySelector('.group span.uppercase');
    if (langSpan) {
        langSpan.textContent = lang;
    }

    // 4. حفظ اللغة المختارة في ذاكرة المتصفح
    localStorage.setItem('preferredLang', lang);
}

// تشغيل اللغة المحفوظة تلقائياً عند فتح الموقع
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    changeLanguage(savedLang);
});

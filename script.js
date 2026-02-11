const translations = {
    'ar': {
        'nav-contact': "اتصل بنا",
        'nav-donate': "تبرع الآن",
        'nav-login': "الدخول",
        'noor-msg': "مرحبا! أنا نوري، مساعد ومضة نور 🌟 قولي... إزاي أقدر أساعدك النهاردة؟ 😊",
        'footer-rights': "© جميع الحقوق محفوظة لجمعية ومضة نور 2026"
    },
    'en': {
        'nav-contact': "Contact Us",
        'nav-donate': "Donate Now",
        'nav-login': "Login",
        'noor-msg': "Hello! I am Noor, Wamda Nour assistant 🌟 How can I help you today? 😊",
        'footer-rights': "© All rights reserved to Wamda Nour Association 2026"
    },
    'es': {
        'nav-contact': "Contáctenos",
        'nav-donate': "Donar Ahora",
        'nav-login': "Acceso",
        'noor-msg': "¡Hola! Soy Noor 🌟 ¿Cómo puedo ayudarte hoy? 😊",
        'footer-rights': "© Todos los derechos reservados a la Asociación Wamda Nour 2026"
    },
    'fr': {
        'nav-contact': "Contactez-nous",
        'nav-donate': "Faire un don",
        'nav-login': "Connexion",
        'noor-msg': "Bonjour! Je suis Noor 🌟 Comment puis-je vous aider aujourd'hui? 😊",
        'footer-rights': "© Tous droits réservés à l'Association Wamda Nour 2026"
    }
};

function changeLanguage(lang) {
    // ترجمة كل عنصر يحمل خاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // تغيير اتجاه الصفحة
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // حفظ اللغة المختارة في المتصفح لتبقى ثابتة عند التنقل بين الصفحات
    localStorage.setItem('selectedLang', lang);
}

// عند تحميل أي صفحة، استرجع اللغة المحفوظة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ar';
    changeLanguage(savedLang);
});

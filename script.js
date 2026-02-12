const translations = {
    ar: {
        "nav-login": "الدخول",
        "nav-donate": "تبرع الآن",
        "nav-contact": "اتصل بنا",
        "hero-title": "نضيء دروب <span class='text-brandCyan'>الخير</span> ونصنع أثر مستدام",
        "hero-btn": "مبادراتنا الميدانية",
        "about-title": "النبذة التعريفية",
        "about-desc": "تأسست جمعية ومضة نور ككيان إنساني يسعى لإحداث تغيير جذري ومستدام في حياة الأفراد.",
        "reg-title": "التسجيلات الدولية",
        "partner-title": "الشركاء الاستراتيجيون",
        "footer-about-title": "جمعية ومضة نور",
        "footer-about-desc": "نعمل على تمكين الإنسان وبناء المجتمعات من خلال حلول تنموية وإنسانية مستدامة.",
        "footer-community-title": "المجتمع",
        "footer-privacy-title": "السياسة والخصوصية",
        "ai-greet": "مرحبا! أنا نوري، مساعد ومضة نور 🌟 قولي... إزاي أقدر أساعدك النهاردة؟ 😊"
    },
    en: {
        "nav-login": "Login",
        "nav-donate": "Donate Now",
        "nav-contact": "Contact Us",
        "hero-title": "Lighting paths of <span class='text-brandCyan'>Goodness</span>",
        "hero-btn": "Our Initiatives",
        "about-title": "About Us",
        "about-desc": "Wamda Noor was established as a humanitarian entity seeking radical change.",
        "reg-title": "International Registrations",
        "partner-title": "Strategic Partners",
        "footer-about-title": "Wamda Noor Association",
        "footer-about-desc": "Empowering people and building communities through sustainable solutions.",
        "footer-community-title": "Community",
        "footer-privacy-title": "Policy & Privacy",
        "ai-greet": "Hi! I'm Noor 🌟 How can I help you today? 😊"
    },
    fr: {
        "nav-login": "Connexion",
        "nav-donate": "Faire un don",
        "nav-contact": "Contactez-nous",
        "hero-title": "Éclairer les chemins du <span class='text-brandCyan'>Bien</span>",
        "hero-btn": "Nos Initiatives",
        "about-title": "À Propos",
        "about-desc": "Wamda Noor est une entité humanitaire pour un changement durable.",
        "reg-title": "Enregistrements Internationaux",
        "partner-title": "Partenaires Stratégiques",
        "footer-about-title": "Association Wamda Noor",
        "footer-about-desc": "Autonomiser les personnes et bâtir des communautés.",
        "footer-community-title": "Communauté",
        "footer-privacy-title": "Confidentialité",
        "ai-greet": "Salut! Je suis Noor 🌟 Comment puis-je vous aider ? 😊"
    },
    es: {
        "nav-login": "Acceso",
        "nav-donate": "Donar Ahora",
        "nav-contact": "Contáctenos",
        "hero-title": "Iluminando caminos de <span class='text-brandCyan'>Bien</span>",
        "hero-btn": "Iniciativas",
        "about-title": "Sobre Nosotros",
        "about-desc": "Wamda Noor se estableció como una entidad humanitaria líder.",
        "reg-title": "Registros Internacionales",
        "partner-title": "Socios Estratégicos",
        "footer-about-title": "Asociación Wamda Noor",
        "footer-about-desc": "Empoderando a las personas y construyendo comunidades.",
        "footer-community-title": "Comunidad",
        "footer-privacy-title": "Privacidad",
        "ai-greet": "¡Hola! Soy Noor 🌟 ¿Cómo puedo ayudarte hoy? 😊"
    }
};

function changeLanguage(lang) {
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langSpan = document.querySelector('.group span.uppercase');
    if (langSpan) { langSpan.textContent = lang; }

    localStorage.setItem('preferredLang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    changeLanguage(savedLang);
});

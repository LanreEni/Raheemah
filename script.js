// GLOBAL NAVIGATION FUNCTION (used by inline onclick)
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {

    /* ==========================
       CONTACT FORM HANDLER
    =========================== */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const message = document.getElementById('message')?.value || '';

            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            );

            window.location.href =
                `mailto:raheemahabdulfatai@gmail.com?subject=${subject}&body=${body}`;

            this.reset();
        });
    }

    /* ==========================
       MOBILE MENU TOGGLE
    =========================== */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* ==========================
       NAV SCROLL EFFECT
    =========================== */
    const nav = document.querySelector('nav');

    if (nav) {
        window.addEventListener('scroll', () => {
            nav.style.background =
                window.scrollY > 100
                    ? 'rgba(10, 14, 13, 0.98)'
                    : 'rgba(10, 14, 13, 0.95)';
        });
    }
});

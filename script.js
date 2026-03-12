const header = document.getElementById('main-header');
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollPosition <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
});

const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const mobileLinks = menuMobile.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.add('hidden');
    });
});

const modal = document.getElementById('modal-privacidade');
const btnOpenModal = document.getElementById('open-modal');
const btnCloseModal = document.getElementById('close-modal');
const btnEntendi = document.getElementById('btn-entendi');

const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
btnEntendi.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('.absolute.inset-0.bg-black\\/60')) {
        closeModal();
    }
});
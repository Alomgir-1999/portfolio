const navLinks = document.querySelectorAll('header nav a');
const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const resumeBtns = document.querySelectorAll('.resume-btn');

function resetActivePage() {
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
}

// Navbar click
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        resetActivePage();
        link.classList.add('active');
        sections[idx].classList.add('active');
    });
});

// Logo click
logo.addEventListener('click', () => {
    resetActivePage();
    navLinks[0].classList.add('active');
    sections[0].classList.add('active');
});

// Resume Tabs
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.resume-detail').forEach(d => d.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.resume-detail')[idx].classList.add('active');
    });
});

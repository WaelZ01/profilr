// 1. Mobile Navigation Drawer
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (menuIcon) {
            menuIcon.classList.toggle('bx-menu');
            menuIcon.classList.toggle('bx-x');
        }
    });

    navbar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if (menuIcon) {
                menuIcon.classList.add('bx-menu');
                menuIcon.classList.remove('bx-x');
            }
        });
    });
}

// 2. Scroll Progress, Floating Header & Active Section Link
const header = document.getElementById('header');
const scrollWatcher = document.querySelector('.scroll-watcher');
const trackedSections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.navbar a');

function onScrollUpdate() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    if (scrollWatcher) {
        scrollWatcher.style.width = `${pct}%`;
    }

    if (header) {
        header.classList.toggle('scrolled', scrollTop > 30);
    }

    let currentSection = 'home';
    trackedSections.forEach((sec) => {
        if (scrollTop >= sec.offsetTop - 200) {
            currentSection = sec.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${currentSection}`);
    });
}

window.addEventListener('scroll', onScrollUpdate, { passive: true });
onScrollUpdate();

// 3. Interactive Developer Terminal Tabs & Run Button
const termTabs = document.querySelectorAll('.term-tab');
const termPanes = {
    profile: document.getElementById('tab-profile'),
    stack: document.getElementById('tab-stack'),
    contact: document.getElementById('tab-contact')
};
const termOutput = document.getElementById('term-output');
const termRunBtn = document.getElementById('term-run-btn');

termTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        termTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        Object.entries(termPanes).forEach(([key, pane]) => {
            if (pane) pane.classList.toggle('active', key === target);
        });

        if (termOutput) {
            termOutput.innerHTML = `<i class='bx bx-check-circle'></i> Loaded ${tab.textContent}`;
        }
    });
});

if (termRunBtn && termOutput) {
    const messages = [
        "Wael Alaa — Web Developer & Cybersecurity Student",
        "Stack verified: React, JS, Node.js, Express, MongoDB",
        "Direct reach: wael88masoud@gmail.com | +973-33847384"
    ];
    let msgIndex = 0;

    termRunBtn.addEventListener('click', () => {
        termOutput.innerHTML = `<i class='bx bx-terminal'></i> ${messages[msgIndex]}`;
        msgIndex = (msgIndex + 1) % messages.length;
    });
}

// 4. Filterable Tech Stack Grid
const skillFilterBtns = document.querySelectorAll('[data-skill-filter]');
const skillTiles = document.querySelectorAll('.skill-tile');

skillFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.skillFilter;
        skillFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        skillTiles.forEach((tile) => {
            const match = filter === 'all' || tile.dataset.category === filter;
            tile.classList.toggle('hidden', !match);
        });
    });
});

// 5. Filterable Projects Case Studies
const projectFilterBtns = document.querySelectorAll('[data-project-filter]');
const projectCases = document.querySelectorAll('.project-case');

projectFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.projectFilter;
        projectFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        projectCases.forEach((card) => {
            const match = filter === 'all' || card.dataset.projectCat === filter;
            card.classList.toggle('hidden', !match);
        });
    });
});

// 6. One-Click Copy to Clipboard for Email & Phone
document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
        const textToCopy = btn.dataset.copy;
        if (!textToCopy) return;

        try {
            await navigator.clipboard.writeText(textToCopy);
            const icon = btn.querySelector('i');
            const label = btn.querySelector('span');
            if (icon) icon.className = 'bx bx-check';
            if (label) label.textContent = 'Copied!';

            setTimeout(() => {
                if (icon) icon.className = 'bx bx-copy';
                if (label) label.textContent = 'Copy';
            }, 1800);
        } catch {
            // Fallback if clipboard permission denied
        }
    });
});

// 7. Scroll Reveal Observer
const revealItems = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    },
    { threshold: 0.12 }
);

revealItems.forEach((el) => revealObserver.observe(el));

// 8. Typed.js Dynamic Role Text
if (typeof Typed !== 'undefined' && document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: [
            'Frontend Developer',
            'React.js Engineer',
            'Cybersecurity Student',
            'Full-Stack Builder'
        ],
        typeSpeed: 65,
        backSpeed: 45,
        backDelay: 1500,
        loop: true
    });
}


// AOS Animation Initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ==========================================
// DATA KEAHLIAN (SKILLS)
// Silakan ubah data di bawah ini sesuai keinginan Anda.
// ==========================================
const mySkills = [
    {
        name: "Frontend (Next.js & Tailwind)",
        percentage: 50
    },
    {
        name: "Backend (Laravel & PHP)",
        percentage: 35
    },
    {
        name: "JavaScript & TypeScript & NextJS",
        percentage: 40
    }
];

// Function to render skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');

    // Clear existing content (if any)
    skillsContainer.innerHTML = '';

    // Loop through the skills data and create HTML elements
    mySkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `
            <div class="flex justify-between items-center mb-2 gap-4">
                <span class="font-medium text-slate-700">${skill.name}</span>
                <span class="text-indigo-600 font-bold">${skill.percentage}%</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                     style="width: 0%" data-width="${skill.percentage}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillItem);
    });

    // Add animation to the bars after rendering
    setTimeout(() => {
        const bars = skillsContainer.querySelectorAll('[data-width]');
        bars.forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }, 500); // Delay slightly to allow the DOM to update and animation to be visible
}

// Call the render function when the page loads
document.addEventListener('DOMContentLoaded', renderSkills);

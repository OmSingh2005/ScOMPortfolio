/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Extend ScrollReveal for newly added sections
// About section: image from left, description from right
sr.reveal('.about__image', {origin: 'left', delay: 200});
sr.reveal('.about__description', {origin: 'right', delay: 300});

// About tiles: staggered animation for "What I do" and "What I'm aiming for"
sr.reveal('.about__tile', {interval: 100});

// Skills section: staggered animation for skill cards
sr.reveal('.skill__card', {interval: 100});

// Currently Learning section
sr.reveal('.skills__learning', {delay: 300});

// Work/Projects section: staggered card animations
sr.reveal('.work__card', {interval: 150});

// Certifications section: staggered card animations
sr.reveal('.certification__card', {interval: 150});

// Contact section: contact cards and CTA button
sr.reveal('.contact__card', {interval: 100});
sr.reveal('.contact__highlight', {delay: 300}); 

/*===== MODAL FUNCTIONALITY =====*/
const modal = document.getElementById('results-modal');
const btn = document.getElementById('view-results-btn');
const closeBtn = document.querySelector('.modal-close');
const overlay = document.querySelector('.modal-overlay');

// Open modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
overlay.onclick = function() {
    modal.style.display = 'none';
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

/*===== CPU SCHEDULER MODAL =====*/
const cpuModal = document.getElementById('cpu-modal');
const cpuBtn = document.getElementById('cpu-results-btn');
const cpuCloseBtn = cpuModal.querySelector('.modal-close');
const cpuOverlay = cpuModal.querySelector('.modal-overlay');

// Open CPU modal
cpuBtn.onclick = function() {
    cpuModal.style.display = 'block';
}

// Close CPU modal
cpuCloseBtn.onclick = function() {
    cpuModal.style.display = 'none';
}

// Close CPU modal when clicking outside
cpuOverlay.onclick = function() {
    cpuModal.style.display = 'none';
}

// Close CPU modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && cpuModal.style.display === 'block') {
        cpuModal.style.display = 'none';
    }
});

/*===== CERTIFICATE MODAL =====*/
const certificateModal = document.getElementById('certificate-modal');
const certificateImage = document.getElementById('certificate-image');
const certificateModalTitle = document.getElementById('certificate-modal-title');
const certificateCloseBtn = certificateModal.querySelector('.modal-close');
const certificateOverlay = certificateModal.querySelector('.modal-overlay');

// Function to open certificate modal
function openCertificateModal(imageSrc, title) {
    certificateImage.src = imageSrc;
    certificateImage.alt = title;
    certificateModalTitle.textContent = title;
    certificateModal.style.display = 'block';
}

// Function to close certificate modal
function closeCertificateModal() {
    certificateModal.style.display = 'none';
}

// Add event listeners to certification cards
document.addEventListener('DOMContentLoaded', function() {
    const certificationCards = document.querySelectorAll('.certification__card');
    
    certificationCards.forEach(card => {
        const cardElement = card;
        const iconElement = card.querySelector('.certification__icon');
        const imageSrc = card.dataset.image;
        const linkUrl = card.dataset.link;
        const title = card.querySelector('.certification__name').textContent;
        
        // Card click - open modal
        cardElement.addEventListener('click', function(e) {
            // Prevent modal if icon was clicked
            if (e.target.closest('.certification__icon')) {
                return;
            }
            openCertificateModal(imageSrc, title);
        });
        
        // Icon click - open external link
        if (iconElement) {
            iconElement.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click
                window.open(linkUrl, '_blank');
            });
        }
    });
});

// Close certificate modal
certificateCloseBtn.onclick = function() {
    closeCertificateModal();
}

// Close certificate modal when clicking outside
certificateOverlay.onclick = function() {
    closeCertificateModal();
}

// Close certificate modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && certificateModal.style.display === 'block') {
        closeCertificateModal();
    }
});

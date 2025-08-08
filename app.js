// const links = document.querySelectorAll(".navigation a");

// links.forEach(link => {
//     link.addEventListener('click', function() {
//         links.forEach(l => l.classList.remove("active"));

//         link.classList.add("active");
//     });

//     if (link.href === window.location.href) {
//         link.classList.add("active");
//     }
// });


const projectData = {
    checksteel1: [
        'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Checksteel+Image+1',
        'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Checksteel+Image+2',
        'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Checksteel+Image+3',
        'https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Checksteel+Image+4'
    ],
    checksteel2: [
        'https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Checksteel+2+Image+1',
        'https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Checksteel+2+Image+2',
        'https://via.placeholder.com/600x400/7ED321/FFFFFF?text=Checksteel+2+Image+3'
    ],
    astral: [
        'https://via.placeholder.com/600x400/F5A623/FFFFFF?text=Astral+Image+1',
        'https://via.placeholder.com/600x400/F5A623/FFFFFF?text=Astral+Image+2'
    ],
    medical: [
        'https://via.placeholder.com/600x400/BD10E0/FFFFFF?text=Medical+Image+1',
        'https://via.placeholder.com/600x400/BD10E0/FFFFFF?text=Medical+Image+2',
        'https://via.placeholder.com/600x400/BD10E0/FFFFFF?text=Medical+Image+3'
    ],
    anta: [
        'https://via.placeholder.com/600x400/B8E986/FFFFFF?text=URC+Bridge+1',
        'https://via.placeholder.com/600x400/B8E986/FFFFFF?text=URC+Bridge+2'
    ],
    philcris1: [
        'Images/Excavation/1440x1080\ \(1\).png',
        'Images/Excavation/1440x1080.png'
    ],
    philcris2: [
        'https://via.placeholder.com/600x400/D0021B/FFFFFF?text=Philcris+2+Image+1'
    ],
    hagonoy: [
        'Images/SheetPile/custom\ sizes\ \(1\).png',
        'Images/SheetPile/custom\ sizes.png'
    ]
};

// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
                
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                
        // Add active class to clicked link
        this.classList.add('active');
                
        // Scroll to target section
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal functions
function openModal(title, description, projectKey) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalGallery = document.getElementById('modalGallery');
            
    modalTitle.textContent = title;
    modalDescription.textContent = description;
            
    // Clear previous gallery
    modalGallery.innerHTML = '';
            
    // Add images to gallery
    const images = projectData[projectKey] || [];
    images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = title;
        img.onclick = () => window.open(imageSrc, '_blank');
        modalGallery.appendChild(img);
    });
            
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});


const form = document.getElementById('reqQuote');
form.addEventListener('submit', async (e) => {
    console.log('Form submitted');
    e.preventDefault();

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

     try {
        await fetch('https://script.google.com/macros/s/AKfycbwVSABq0A1qN3GDrlysyBxXiNc8EFAj5W7j1O7pm6fFBMjxyQ-T3b5r7UD4WK-u6X942g/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' }
    });

    alert('Your message was submitted successfully!');
    form.reset();
} catch (error) {
    alert('There was an error. Please try again.');
    console.error(error);
  }
});


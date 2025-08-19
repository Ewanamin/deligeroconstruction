const projectData = {
    checksteel1: [
        'Images/Excavation/1440x1080\ \(3\).png',
        'Images/Excavation/1440x1080\ \(4\).png'
    ],
    checksteel2: [
        
    ],
    astral: [
    
    ],
    medical: [
        
    ],
    anta: [
        
    ],
    philcris1: [
        'Images/Excavation/1440x1080\ \(1\).png',
        'Images/Excavation/1440x1080.png'
    ],
    philcris2: [
        
    ],
    hagonoy: [
        'Images/SheetPile/custom\ sizes\ \(1\).png',
        'Images/SheetPile/custom\ sizes.png'
    ],
    pumpingStation: [
        'Images/BoredPile/1440x1080\ \(7\).png',
        'Images/BoredPile/810x1080\ \(2\).png'
    ],
    PrimehomesDemolition: [
        'Images/Demolition/Primehomes1.jpg',
        'Images/Demolition/Primehomes2.jpg',
        'Images/Demolition/Primehomes3.jpg',
        'Images/Demolition/Primehomes4.jpg',
        'Images/Demolition/Primehomes5.jpg',
        'Images/Demolition/Primehomes6.jpg',
        'Images/Demolition/Primehomes7.jpg',
        'Images/Demolition/Primehomes8.jpg',
        'Images/Demolition/Primehomes9.jpg',
        'Images/Demolition/Primehomes10.jpg'
    ], 
    PrimehomesHauling: [
        'Images/Hauling/PrimehomesHauling2.jpg',
        'Images/Hauling/PrimehomesHauling.jpg',
        'Images/Hauling/PrimehomesHauling3.jpg'
    ],
    MakatiDemolition: [
        'Images/Demolition/Makati1.jpg',
        'Images/Demolition/Makati2.jpg',
        'Images/Demolition/Makati3.jpg',
        'Images/Demolition/Makati4.jpg',
        'Images/Demolition/Makati5.jpg'
    ]
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
                
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                
        this.classList.add('active');
                
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function openModal(title, description, projectKey) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalGallery = document.getElementById('modalGallery');
            
    modalTitle.textContent = title;
    modalDescription.textContent = description;
            
    modalGallery.innerHTML = '';
            
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


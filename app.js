const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");
    });

    if (link.href === window.location.href) {
        link.classList.add("active");
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



    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });
    
    document.querySelector('.signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'index.html'; // Redirect to index.html
    });


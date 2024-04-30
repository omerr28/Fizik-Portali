document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        var answers = document.querySelectorAll(".answer");
        answers.forEach(function(answer) {
            answer.addEventListener("click", function() {
                var correctAnswer = this.getAttribute("data-correct");
                var correctAnswerElement = this.parentElement.querySelector(".correct-answer");
                correctAnswerElement.innerHTML = "Doğru cevap: " + correctAnswer;
                correctAnswerElement.style.display = "block";
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll(".link");
        links.forEach(function(link) {
            link.addEventListener("click", function() {
                var url = this.getAttribute("data-url");
                window.location.href = url;
            });
        });
    });



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
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.querySelector(".dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        var footer = document.querySelector('footer');
        footer.scrollIntoView({ behavior: 'smooth' });
    });

    var commentLink = document.querySelector('a[href="#comment-form"]');
    commentLink.addEventListener("click", function(event) {
        event.preventDefault();
        var commentsSection = document.getElementById('comments-section');
        commentsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.getElementById("comment-form").addEventListener("submit", function(event) {
    var name = document.getElementById("comment-name").value;
    var message = document.getElementById("comment-message").value;

    if (name.trim() === "" || message.trim() === "") {
        alert("Gerekli boşlukları doldurun.");
        event.preventDefault();
    } else {
        alert("Yorumunuz gönderildi. Teşekkür ederiz!");
    }
});
var heatAndTemperatureLink = document.querySelector('a[href="heat-and-temperature"]');
    heatAndTemperatureLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = 'https://www.youtube.com/watch?v=557E8yO5nLs';
    });

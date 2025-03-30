document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll behavior
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    
    // Set initial padding on body
    document.body.style.paddingTop = navHeight + 'px';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > navHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Form submission handler
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch("/", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const table = document.querySelector("#data-table");
                for (const [key, value] of Object.entries(data)) {
                    const row = table.querySelector(`tr[data-key="${key}"]`);
                    if (row) {
                        row.querySelector("td.value").textContent = value;
                    }
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    // View Full Data button handler
    const viewFullDataBtn = document.getElementById('viewFullData');
    if (viewFullDataBtn) {
        viewFullDataBtn.addEventListener('click', function() {
            const selectedCity = document.getElementById('city').value;
            window.location.href = `/city/${selectedCity}`;
        });
    }
});
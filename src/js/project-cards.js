document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all toggle buttons
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card-body');
            const shortDesc = cardBody.querySelector('.short-description');
            const longDesc = cardBody.querySelector('.long-description');
            const isExpanded = longDesc.style.display === 'block';

            // Toggle the display of descriptions
            if (isExpanded) {
                shortDesc.style.display = 'block';
                longDesc.style.display = 'none';
                this.textContent = 'See More';
            } else {
                shortDesc.style.display = 'block';
                longDesc.style.display = 'block';
                this.textContent = 'See Less';
            }

            // Toggle button classes for visual feedback
            this.classList.toggle('btn-outline-primary');
            this.classList.toggle('btn-primary');
            this.classList.toggle('text-white');
        });
    });
});

export function initProjectCards() {
    document.querySelectorAll('.toggle-description').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const cardBody = this.closest('.card-body');
            const longDesc = cardBody.querySelector('.long-description');
            const isExpanded = longDesc.classList.contains('show');
            
            // Toggle the show class
            longDesc.classList.toggle('show');
            
            // Update button text
            this.textContent = isExpanded ? 'See More' : 'See Less';
            
            // Update button classes
            this.classList.toggle('btn-outline-primary', isExpanded);
            this.classList.toggle('btn-primary', !isExpanded);
        });
    });
}
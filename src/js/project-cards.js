export function initProjectCards() {
    console.log('Initializing project cards...');
    
    document.querySelectorAll('.toggle-description').forEach(button => {
        // Initialize button text based on current state
        const cardBody = button.closest('.card-body');
        if (cardBody) {
            const longDesc = cardBody.querySelector('.long-description');
            if (longDesc) {
                const isExpanded = longDesc.classList.contains('show');
                button.textContent = isExpanded ? 'See Less' : 'See More';
                button.classList.toggle('btn-primary', isExpanded);
                button.classList.toggle('btn-outline-primary', !isExpanded);
                button.classList.toggle('text-white', isExpanded);
            }
        }

        if (!button.dataset.listenerAdded) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const cardBody = this.closest('.card-body');
                if (!cardBody) return;
                
                const cardText = cardBody.querySelector('.card-text');
                if (!cardText) return;
                
                const longDesc = cardText.querySelector('.long-description');
                if (!longDesc) return;
                
                // Toggle the show class on the long description
                const isExpanded = longDesc.classList.toggle('show');
                
                // Update button text and classes
                this.textContent = isExpanded ? 'See Less' : 'See More';
                this.classList.toggle('btn-outline-primary', !isExpanded);
                this.classList.toggle('btn-primary', isExpanded);
                this.classList.toggle('text-white', isExpanded);
                
                // Mark as having a listener
                this.dataset.listenerAdded = 'true';
            });
        }
    });
}
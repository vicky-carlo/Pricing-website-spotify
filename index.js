document.addEventListener('DOMContentLoaded', function() {
    const selectButtons = document.querySelectorAll('.select-btn');

    selectButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedTier = button.closest('.pricing-tier');
            const allTiers = document.querySelectorAll('.pricing-tier');


            allTiers.forEach(function(tier) {
                tier.classList.remove('selected');
            });

            selectedTier.classList.add('selected');


            const tierName = selectedTier.querySelector('h2').innerText;
            alert(`You have selected the ${tierName} tier.`);
        });
    });
});

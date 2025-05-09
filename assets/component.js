document.addEventListener('DOMContentLoaded', () => {
    //Add to card
    document.querySelectorAll('add_to_card').forEach(brn => {
        btn.addEventListener('click', () => {
            const variantId = btn.dataset.variantId;

            fetch('/card/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: variantId, quantity: 1 }),
            })
                .then(res => res.json())
                .then(data => alert(`${data.title} added to your cart!`))
                .catch(error => console.error('Error 💥:', error));
        });
    });

    //Add-to-card with quantity
    document.querySelectorAll('add_to_card_qty').forEach((btn) => {
        btn.addEventListener('click', () => {
            const variantId = btn.dataset.variantId;
            const quantityInput = btn.previousElementSibling;
            const quantity = parseInt(quantityInput.value);

            fetch('/card/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: variantId, quantity }),
            })
                .then(res => res.json())
                .then(data => alert(`${data.title} added to your cart!`))
                .catch(error => console.error('Error ��:', error));
        })
    })
});
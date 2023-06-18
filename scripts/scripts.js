document.getElementById('selectedProduct')
    .addEventListener('change', (event) => {
        const productName = event.target.value;
        dataLayer.push({
            'event': 'product_selected',
            'value': productName,
            'items' : [{
                'id': '1234',
                'google_business_vertical': productName
            }]
        });
});


document.getElementById('main-block')
    .addEventListener('click', (event) => {
        const el = event.target.className.includes('product-card')
            ? event.target
            : event.target.closest('.product-card');
        if (el) {
            const productName = el.id;
            dataLayer.push({
                'event': 'CoffeTypeClicked',
                'value': productName,
                'items' : [{
                    'id': '1234',
                    'google_business_vertical': productName
                }]
            });
        }
    });

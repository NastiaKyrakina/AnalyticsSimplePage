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

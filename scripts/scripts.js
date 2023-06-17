document.getElementById('selectedProduct')
    .addEventListener('change', (event) => {
        const productName = event.target.value;
        gtag('event', 'product_selected', {
            'event_category': 'dropdown',
            'event_label': productName,
            'value': productName,
            'send_to': '351246241'
        });
});

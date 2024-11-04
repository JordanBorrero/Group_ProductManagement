//Group member contribution
//script.js -> Jack DeLeo

$(document).ready(function() {
    $('#productForm').on('submit', function(event) {
        event.preventDefault();
        const productData = {
            id: $('#productId').val(),
            description: $('#productDescription').val(),
            category: $('#productCategory').val(),
            unitOfMeasure: $('#productUOM').val(),
            price: $('#productPrice').val(),
            weight: $('#productWeight').val() || null
        };
        $('#jsonOutput').text(JSON.stringify(productData, null, 2));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    var currentProductHandler = window.currentProductHandle;
    console.log('Current Product Handle:', currentProductHandler);
    if (!currentProductHandler) return;

    // Get the recently viewed products from localStorage, or initialize as empty array
    var viewedProducts = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');

    // Remove the current product if it already exists in the array to avoid duplicates
    viewedProducts = viewedProducts.filter((handler) => handler !== currentProductHandler);

    // Add the current product to the beginning of the array
    viewedProducts.unshift(currentProductHandler);

    // Limit the array to the 5 most recent products
    viewedProducts = viewedProducts.slice(0, 5);

    // Save the updated array back to localStorage as a JSON string
    localStorage.setItem('recentlyViewed', JSON.stringify(viewedProducts));
});

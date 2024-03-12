const categoty = document.querySelector('.category');
const catItems = document.querySelectorAll('.cat-item');

catItems.forEach((p, index) => {
    p.addEventListener('click', e => {
        // Remove 'black' class from all p elements
        catItems.forEach(d => d.classList.remove('black'));
        // Add 'black' class to the clicked p element
        p.classList.add('black');
        
        const rect = p.getBoundingClientRect();
        
        // Get the width of the div element
        const divWidth = categoty.clientWidth;
        const pWidth = rect.width;
        const scrollableWidth = categoty.scrollWidth;
        
        // Calculate the scroll position to center the clicked p element
        const scrollX = rect.left + categoty.scrollLeft - (divWidth / 2) + (pWidth / 2);
        
        // Ensure the scroll position is within the bounds of the scrollable area
        const maxScrollX = scrollableWidth - divWidth;
        const finalScrollX = Math.max(0, Math.min(maxScrollX, scrollX));
        
        // Scroll the div element horizontally to position the clicked p element in the middle
        categoty.scrollTo({
            left: finalScrollX,
            behavior: 'smooth'
        });
    });
});
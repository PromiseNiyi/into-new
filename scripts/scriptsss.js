// function filterImages(category) {
//     const images = document.querySelectorAll('.image-item');
    
//     images.forEach(image => {
//         if (category === 'all' || image.classList.contains(category)) {
//             image.style.display = 'block';
//         } else {
//             image.style.display = 'none';
//         }
//     });
// }

// function searchImages() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase();
//     const images = document.querySelectorAll('.image-item');

//     images.forEach(image => {
//         const imageName = image.getAttribute('data-name').toLowerCase();
//         if (imageName.includes(searchTerm)) {
//             image.style.display = 'block';
//         } else {
//             image.style.display = 'none';
//         }
//     });
// }

//  //parameter passed from button (Parameter same as category)
//  function filterProduct(value) {
//     //Button class code
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//       //check if value equals innerText
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
// }

function filterImages(category) {
    const images = document.querySelectorAll('.grid-item');
    const buttons = document.querySelectorAll('.filter-buttons button');

    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.getElementById(`${category}Btn`);
    activeButton.classList.add('active');
}

function searchImages() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.grid-item');

    images.forEach(image => {
        const imageName = image.getAttribute('data-name').toLowerCase();
        if (imageName.includes(searchTerm)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

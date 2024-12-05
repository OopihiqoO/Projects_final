
const links = document.querySelectorAll('.link');
const images = document.querySelectorAll('.image');
links.forEach(link => {
    link.addEventListener('click', function(e) {

        const imageId = link.getAttribute('data-img');

        const selectedImage = document.getElementById(imageId);
        selectedImage.style.display = 'block';
    });
});

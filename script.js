document.addEventListener('DOMContentLoaded', () => {
    const stack = document.querySelector('.photo-stack');

    stack.addEventListener('click', (e) => {
        const photo = e.target.closest('.photo');
        if (photo) {
            photo.style.transform = "translateX(200px) rotate(20deg)";
            photo.style.opacity = "0";

            setTimeout(() => {
                stack.prepend(photo);
                
                photo.style.transform = "";
                photo.style.opacity = "1";
            }, 300);
        }
    });
});
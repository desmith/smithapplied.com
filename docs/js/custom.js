/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var whatsappIcon = document.querySelector(".whatsapp-icon-link");

        // Modify the class based on the scroll position
        if (scrollPosition > 100) {
            whatsappIcon.classList.add("scroll-modify");
        } else {
            whatsappIcon.classList.remove("scroll-modify");
        }
    });
});



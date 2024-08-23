document.addEventListener('DOMContentLoaded', function () {
    // ScrollSpy de Bootstrap
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    }

    // Responsive navbar toggler
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Modal Bootstrap
    const myModal = document.getElementById('myModal');
    const myInput = document.getElementById('myInput');
    if (myModal && myInput) {
        myModal.addEventListener('shown.bs.modal', () => {
            myInput.focus();
        });
    }

    // IntersectionObserver para el efecto de fade-in
    const fadeIns = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);  // Dejar de observar una vez que se ha mostrado
                }
            });
        },
        {
            threshold: 0.1  // Muestra el efecto cuando el 10% del elemento está visible
        }
    );

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });
});

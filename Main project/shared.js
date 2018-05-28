var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var closeModalButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove("open");
    closeModal();
});

function closeModal() {
    if (modal) {
        modal.classList.remove("open");
    }

    backdrop.classList.remove("open");
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});
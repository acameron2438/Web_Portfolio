document.querySelectorAll('.bike-toc a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        const contentBox = document.querySelector('.bike-content');

        if (target && contentBox) {
            const targetTop =
                target.getBoundingClientRect().top -
                contentBox.getBoundingClientRect().top +
                contentBox.scrollTop;

            contentBox.scrollTo({
                top: targetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
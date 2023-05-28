const sections = document.querySelectorAll('section');
let currentIndex = sections.length - 1;

function expandCard(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('expanded');
        } else {
            section.classList.remove('expanded');
        }
    });
}

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);

    if (delta < 0 && currentIndex > 0) {
        currentIndex--;
        expandCard(currentIndex);
    } else if (delta > 0 && currentIndex < sections.length - 1) {
        currentIndex++;
        expandCard(currentIndex);
    }
});

expandCard(currentIndex);

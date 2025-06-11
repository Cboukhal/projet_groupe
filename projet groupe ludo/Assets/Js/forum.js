document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('threadForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('titre').value.trim();
    const message = document.getElementById('message').value.trim();

    if (title && message) {
    const newThread = document.createElement('div');
    newThread.classList.add('thread');

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = message;

        newThread.appendChild(h3);
        newThread.appendChild(p);

    const forumSection = document.querySelector('.forum');
        forumSection.appendChild(newThread);

    form.reset();
    }
    });
});
const AboutBtn = document.getElementById('Aboutusbtn');
const hideAboutUsBtn = document.getElementById('hideAboutUsBtn');
const aboutText = document.querySelector('.about-text');

AboutBtn.onclick = () => {
    AboutBtn.classList.add('hidden');
    aboutText.classList.toggle('hidden');
    hideAboutUsBtn.classList.remove('hidden');
}

hideAboutUsBtn.onclick = () => {
    AboutBtn.classList.remove('hidden');
    aboutText.classList.add('hidden');
    hideAboutUsBtn.classList.add('hidden');
}
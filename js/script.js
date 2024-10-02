const openButton = document.querySelector('.open__button');
const preloader = document.querySelector('.preloader')
const preloaderContainer = document.querySelector('.preloader-container');
const loaderText = document.querySelector('.preloader__text span');
const statusText = document.querySelector('.preloader__status');

document.body.style.overflow = 'hidden';

openButton.addEventListener('click', () => {
    openButton.style.display = 'none';
    loaderText.textContent = '0/100';
    preloaderContainer.style.display = 'flex';

    const audio = document.getElementById('audio');
    audio.volume = 0.15;
    audio.currentTime = 11;
    audio.play();

    let progress = 0;
    const intervalId = setInterval(() => {
        progress += 1;
        statusText.textContent = `${progress}/100`;

        if (progress === 1) {
            // document.querySelector('.oblako1').style.animation = 'oblako1 5s infinite linear';
            // document.querySelector('.oblako2').style.animation = 'oblako2 6s infinite linear';
            // document.querySelector('.oblako2').style.animationDelay = '1s';
            // document.querySelector('.oblako3').style.animation = 'oblako3 7s infinite linear';
            // document.querySelector('.oblako3').style.animationDelay = '.5s';
        }

        if (progress === 100) {
            clearInterval(intervalId);
            preloader.style.animation = 'fadeOutPreloader 1s linear forwards';
            document.body.style.overflow = 'auto';
            // Дополнительные действия после завершения загрузки
        }
    }, 30); // Интервал обновления (в миллисекундах)
});
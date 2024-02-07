document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    const androidTile = document.querySelector('.android-tile');
    const webTile = document.querySelector('.web-tile');
    const networkingTile = document.querySelector('.networking-tile');

    androidTile.addEventListener('click', function () {
        toggleProjects('android');
    });

    webTile.addEventListener('click', function () {
        toggleProjects('web');
    });

    networkingTile.addEventListener('click', function () {
        toggleProjects('networking');
    });

    function toggleProjects(category) {
        const projectTiles = document.querySelectorAll('.project-tiles');
        projectTiles.forEach(tile => {
            if (tile.id === `${category}-projects`) {
                tile.style.display = tile.style.display === 'none' ? 'flex' : 'none';
            } else {
                tile.style.display = 'none';
            }
        });
    }

    function stopMarquee(element) {
        const marqueeWrapper = document.getElementById('marqueeWrapper');
        marqueeWrapper.style.animationPlayState = 'paused';
        setTimeout(() => {
            marqueeWrapper.style.animationPlayState = 'running';
        }, 5000); // Adjust the delay as needed (in milliseconds)
    }

    function showProjects(category) {
        const projectTiles = document.querySelectorAll('.project-tiles');
        projectTiles.forEach(tile => {
            tile.style.display = 'none';
        });

        const selectedProjects = document.getElementById(`${category}-projects`);
        selectedProjects.style.display = 'flex';
    }

    function hideProjects(category) {
        const projectTiles = document.getElementById(`${category}-projects`);
        projectTiles.style.display = 'none';
    }
});

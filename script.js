let kapal = document.getElementById('kapal');
let score = document.getElementById('score');
let nyawa = document.getElementById('nyawa');

score.innerHTML = '0';
nyawa.innerHTML = '5';

document.onmousemove = (event) => {
    kapal.style.left = event.clientX - (kapal.clientWidth/2) + 'px';
}

setInterval(() => {
    peluru();
}, 300);

setInterval(() => {
    musuh();
}, 2000);

function peluru() {
    let peluru = document.createElement('div');
    peluru.className = "peluru";
    peluru.style.top = (kapal.offsetTop) + 'px';
    peluru.style.left = (kapal.offsetLeft + (kapal.offsetWidth/2)) + 'px';
    document.body.appendChild(peluru);
    setInterval(() => {
        let semuaMusuh = document.getElementsByClassName('musuh');
        for(let i = 0; i < semuaMusuh.length; i++) {
            if(peluru.offsetLeft >= semuaMusuh[i].offsetLeft && peluru.offsetLeft <= (semuaMusuh[i].offsetLeft + semuaMusuh[i].offsetWidth) && peluru.offsetTop >= semuaMusuh[i].offsetTop && peluru.offsetTop <= (semuaMusuh[i].offsetTop + semuaMusuh[i].offsetHeight)) {
                semuaMusuh[i].style.backgroundImage = 'url(explode.png)';
                setTimeout(() => {
                    semuaMusuh[i].remove();
                }, 200);
                peluru.remove();
                score.innerHTML = parseInt(score.innerHTML) + 1;
            }
        }
        if(peluru.offsetTop <= 0) {
            peluru.remove();
        } else {
            peluru.style.top = (peluru.offsetTop - 5) + 'px';
        }
    }, 20);
}

function musuh() {
    let musuh = document.createElement('div');
    musuh.className = "musuh";
    musuh.style.top = '0px';
    musuh.style.left = (Math.random() * window.innerWidth) + 'px';
    document.body.appendChild(musuh);
    setInterval(() => {
        if(musuh.offsetTop >= window.innerHeight) {
            nyawa.innerHTML = parseInt(nyawa.innerHTML) - 1;
            musuh.remove();
            if(parseInt(nyawa.innerHTML) == 0) {
                alert("Game Over");
                location.reload();
            }
        } else {
            musuh.style.top = (musuh.offsetTop + 5) + 'px';
        }
    }, 50);
}
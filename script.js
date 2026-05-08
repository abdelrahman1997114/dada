function openImg(img) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");

    popup.style.display = "flex";
    popupImg.src = img.src;
}

function closeImg() {
    document.getElementById("popup").style.display = "none";
}

function showMessage() {
    document.getElementById("message").style.display = "block";
}

function playMusic() {
    const audio = document.getElementById("bgMusic");

    audio.play().catch(() => {
        console.log("Autoplay blocked");
    });
}

const targetTime = new Date("May 5, 2027 17:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const diff = targetTime - now;

    const countdown = document.getElementById("countdown");

    if (diff <= 0) {
        countdown.innerHTML = "🎉 النهارده عيد ميلادها 🎂";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
    );

    countdown.innerHTML = `
        ⏳ ${days} يوم • ${hours} ساعة • ${minutes} دقيقة • ${seconds} ثانية
    `;

}, 1000);
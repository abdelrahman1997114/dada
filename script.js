// popup
function openImg(img) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");

    if (popup && popupImg) {
        popup.style.display = "flex";
        popupImg.src = img.src;
    }
}

function closeImg() {
    const popup = document.getElementById("popup");

    if (popup) {
        popup.style.display = "none";
    }
}

// message
function showMessage() {
    const msg = document.getElementById("message");

    if (msg) {
        msg.style.display = "block";
    }
}

// 🎵 تشغيل الموسيقى
function playMusic() {
    const audio = document.getElementById("bgMusic");

    if (audio) {
        audio.play().catch(() => {
            console.log("المتصفح منع التشغيل التلقائي");
        });
    }
}

// 🎂 countdown
// التاريخ: 5 مايو الساعة 5 مساءً
const targetTime = new Date("May 5, 2027 17:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const diff = targetTime - now;

    const countdownEl = document.getElementById("countdown");

    if (!countdownEl) return;

    // لو الوقت خلص
    if (diff <= 0) {
        countdownEl.innerHTML = "🎉 النهارده يومها 🎂";
        return;
    }

    // الحسابات
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

    countdownEl.innerHTML =
        `⏳ باقي ${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;

}, 1000);

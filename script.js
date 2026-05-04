// popup
function openImg(img){
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");

    if(popup && popupImg){
        popup.style.display = "flex";
        popupImg.src = img.src;
    }
}

function closeImg(){
    const popup = document.getElementById("popup");
    if(popup){
        popup.style.display = "none";
    }
}

// message
function showMessage(){
    const msg = document.getElementById("message");
    if(msg){
        msg.style.display = "block";
    }
}

// 🎵 تشغيل الموسيقى
function playMusic() {
    const audio = document.getElementById("bgMusic");
    if(audio){
        audio.play().catch(() => {
            console.log("المتصفح منع التشغيل التلقائي");
        });
    }
}

// countdown لبكرا الساعة 5
function getTomorrowAt5PM(){
    const now = new Date();
    const target = new Date();

    target.setDate(now.getDate() + 1);
    target.setHours(17, 0, 0, 0);

    return target.getTime();
}

let targetTime = getTomorrowAt5PM();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetTime - now;

    const countdownEl = document.getElementById("countdown");
    if(!countdownEl) return;

    if(diff <= 0){
        countdownEl.innerHTML = "🎂 النهارده يومها 🎂";
        return;
    }

    const h = Math.floor(diff / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1000*60)) / 1000);

    countdownEl.innerHTML =
        `⏳ باقي ${h} ساعة و ${m} دقيقة و ${s} ثانية`;
}, 1000);
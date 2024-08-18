document.addEventListener("DOMContentLoaded", function() {
    // // 点击特效
    // try {
    //     clickEffect();
    // } catch (error) {
    //     console.error("Error executing clickEffect:", error);
    // }
    //
    // // 樱花特效
    // try {
    //     // setInterval(createSakura, 500); // 简单但不好看的樱花
    //     startSakura();// 复杂但是好看的樱花
    // } catch (error) {
    //     console.error("Error executing createSakura:", error);
    // }

    // 看板娘
    try {
        showLive2D();
    } catch (error) {
        console.error("Error executing showLive2D:", error);
    }
});

function controlAudio() {
    const audioElement = document.getElementById('audio');
    const is_pause = audioElement.paused;//true为暂停，false为播放
    const button = document.getElementById('control_audio');

    if (is_pause) {
        audioElement.play();
        audioElement.muted = false;
        button.innerHTML = '<i class="iconfont icon-zantingyinle"></i>';
    } else {
        audioElement.pause();
        audioElement.currentTime = 0; // 将播放位置重置到开头
        button.innerHTML = '<i class="iconfont icon-music"></i>';
    }
}

function backTop() {
    event.preventDefault();
    window.scrollTo(0, 0, 'smooth');
}

function showLive2D() {
    var element = document.getElementById('show-live_2d');
    const directoryPath = window.location.pathname;
    const directoryOnly = directoryPath.substring(0, directoryPath.lastIndexOf('/'));
    if (!directoryOnly.trim()) {
        InitLive2D()
        element.style.display = 'none';
    } else {
        element.innerText = "看板娘只有主页有哦~";
    }
}

function createSakura() {
    const sakura = document.createElement('div');
    sakura.className = 'sakura';

    // 限制左右生成距离在页面宽度的1%到95%之间
    const minLeft = window.innerWidth * 0.01;
    const maxLeft = window.innerWidth * 0.95;
    const left = Math.random() * (maxLeft - minLeft) + minLeft;
    const animationDuration = Math.random() * 6 + 3;

    sakura.style.left = `${left}px`;
    sakura.style.animationDuration = `${animationDuration}s`;

    sakura.innerHTML = '&#x1F338;';

    document.body.appendChild(sakura);

    sakura.addEventListener('animationend', () => {
        sakura.parentNode.removeChild(sakura);
    });
}

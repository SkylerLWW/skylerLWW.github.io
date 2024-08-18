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
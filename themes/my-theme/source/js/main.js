function stopAudio() {
    document.getElementById('audio').pause();
    document.getElementById('audio').currentTime = 0; // 将播放位置重置到开头
    document.getElementById('stop-music').style.display = 'none';
    document.getElementById('start-music').style.display = 'block';
}

function playAudio() {
    document.getElementById("audio").play();
    document.getElementById("audio").muted = false;
    document.getElementById('stop-music').style.display = 'block';
    document.getElementById('start-music').style.display = 'none';
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
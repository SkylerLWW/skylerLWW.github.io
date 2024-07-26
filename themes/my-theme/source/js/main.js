function stopAudio()
 {
        document.getElementById('audio').pause();
        audio.currentTime = 0; // 将播放位置重置到开头
}

function playAudio()
{
    document.getElementById("audio").play();
    document.getElementById("audio").muted = false;
}

function backTop()
{
    event.preventDefault();
    window.scrollTo(0, 0 ,'smooth');
}

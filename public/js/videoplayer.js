function loadHTMLvideo(url, moderator) {
    $("videoOverlay").empty();

    var video = document.getElementById('video');
    var source = document.createElement('source');

    source.setAttribute('src', url);
    video.appendChild(source);
    video.play();

    if(moderator){
        video.setAttribute('controls',true);
    }


}


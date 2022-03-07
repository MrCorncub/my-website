function loadVideo() {
  console.info(`loadVideo called`);

  (function loadYoutubeIFrameApiScript() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    tag.onload = setupPlayer;
  })();


  function setupPlayer() {

    window.YT.ready(function() {
      new window.YT.Player("video", {
        height: "390",
        width: "640",
        videoId: "NUYvbT6vTPs",
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    var videoStatuses = Object.entries(window.YT.PlayerState);
    console.log(videoStatuses.find(status => status[1] === event.data)[0]);
  }
}

if (document.readyState !== "loading") {
  console.info(`document.readyState ==>`, document.readyState);
  loadVideo();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    console.info(`DOMContentLoaded ==>`, document.readyState);
    loadVideo();
  });
}

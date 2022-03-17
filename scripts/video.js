
let obj = JSON.parse(localStorage.getItem('clickedVideo'));

let videoDetails = document.querySelector(".videoDetails");



let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${obj.videoId}`;
iframe.width = "100%";
iframe.height = "100%";
iframe.setAttribute('allowFullScreen',"true");

videoDetails.append(iframe)

var showResult = document.querySelector(".showResult");

async function onSearch() {

    try {
        let videoSearch = document.querySelector("#search").value;
        let response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?q=${videoSearch}&type=video&key=AIzaSyAaSL5ohnChjSP_msFkrrNzUyLhXhxUi14&maxResults=20`
        );

        let data = await response.json();

        let videos = data.items;
        console.log(videos);
        appendVideos(videos);
    }
    catch {
        console.log(error);
    }
}

var showResult = document.querySelector(".showResult");

function appendVideos(elem) {
    document.querySelector(".showResult").innerHTML ="";
    elem.map((ele) => {
        let { id: { videoId }, } = ele;

        console.log("videoId :",videoId);

        var iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = "400px";
        iframe.height = "300px";

        showResult.append(iframe);
    });
};

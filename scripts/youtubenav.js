var showResult = document.querySelector(".showResult");

    async function onSearch() {

        try {
            let videoSearch = document.querySelector("#search").value;
            let response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?q=${videoSearch}&type=video&key=AIzaSyAaSL5ohnChjSP_msFkrrNzUyLhXhxUi14&maxResults=20&part=snippet`
            );

            let data = await response.json();

            let videos = data.items;
            //console.log(videos);
            appendVideos(videos);
        }
        catch {
            console.log(error);
        }
    }

    var showResult = document.querySelector(".showResult");

    async function byDefault() {

        try {
            let response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyAaSL5ohnChjSP_msFkrrNzUyLhXhxUi14&maxResults=20&regionCode=IN`
            );

            let data = await response.json();
            let videos = data.items;
            //console.log(videos);
            appendVideos(videos);

        }
        catch {
            console.log("error:", error);
        }

    }

    byDefault();

    function appendVideos(elem) {
        document.querySelector(".showResult").innerHTML = "";

        elem.map(({ snippet, id: { videoId } }) => {
            // console.log("snippet :", snippet);

            let poster = document.createElement("div");
            poster.setAttribute("class", "poster")

            let thumbnail = document.createElement("img");
            thumbnail.src = snippet.thumbnails.medium.url;
            thumbnail.setAttribute("class", "thumbnail");

            let title = document.createElement("p");
            title.innerText = snippet.title;

            let sentData = {
                snippet,
                videoId
            }

            poster.onclick = () => {
                showVideo(sentData);
            }

            poster.append(thumbnail, title);
            showResult.append(poster);
        });
    };

    function showVideo(data){

        localStorage.setItem("clickedVideo", JSON.stringify(data));
        window.location.href = "video.html";
    }
